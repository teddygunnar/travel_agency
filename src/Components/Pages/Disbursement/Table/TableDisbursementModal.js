import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Modal,
  Typography,
  Button,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import Filter from "../TableFilter/TableFilter";
import { listOfPo } from "../../../../redux/actionsDisbursement/ListPo";
import { listDetail } from "../../../../redux/actionsDisbursement/ListDetail";
import { AddPoToDetailList } from "../../../../redux/actionsDisbursement/AddPoToDetail";
import { DeleteFromDetailList } from "../../../../redux/actionsDisbursement/DeleteFromDetail";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import ForwardIcon from "@material-ui/icons/Forward";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const filterData = {
  tglPoFrom: "",
  tglPoTo: "",
  pencairanBatch: "",
  pencairanTgl: "",
  poNo: "",
  customer: "",
  cabang: "",
};

const TableDisbursementModal = ({
  toggleModal,
  setToggleModal,
  disburseData,
  setDisburseData,
}) => {
  const [filter, setFilter] = useState(filterData);
  const [listPo, setListPo] = useState([]);
  const [detailList, setDetailList] = useState([]);
  const [selectedRowsData, setSelectedRowsData] = useState([]);
  const [selectedRowsDataDelete, setSelectedRowsDataDelete] = useState([]);
  const [clearRows, setClearRows] = useState(false);
  const [render, setRender] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);

  const { disbNo } = disburseData;

  const handleClose = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      setToggleModal(false);
      setDetailList([]);
      setListPo([]);
      setDisburseData({ disbNo: 0 });
      console.log("exit");
    } else {
      console.log("not exit");
    }
  };
  const filterProps = {
    filter,
    setFilter,
  };
  const props = {
    disburseData,
  };

  const {
    tglPoFrom,
    tglPoTo,
    pencairanBatch,
    pencairanTgl,
    poNo,
    customer,
    cabang,
  } = filter;

  const fetchAPI = useCallback(async () => {
    setListPo(
      await dispatch(
        listOfPo(
          localStorage.getItem("userId"),
          localStorage.getItem("auth"),
          tglPoFrom,
          tglPoTo,
          pencairanBatch,
          pencairanTgl,
          poNo,
          customer,
          cabang
        )
      )
    );
  }, [render, filter, disbNo]);

  const fetchAPIDetail = useCallback(async () => {
    const action = await dispatch(
      listDetail(
        localStorage.getItem("userId"),
        localStorage.getItem("auth"),
        disbNo
      )
    );

    setDetailList(action);
  }, [render, disbNo]);

  useEffect(() => {
    fetchAPI();
  }, [disburseData, filter, render]);

  useEffect(() => {
    if (disbNo) {
      fetchAPIDetail();
    }
  }, [render, fetchAPIDetail, disbNo]);

  const ListPoColumns = useMemo(
    () => [
      {
        name: "Tanggal Cair",
        selector: "tglCair",
        center: true,
        sortable: true,
        compact: true,
      },

      {
        name: "PO ID",
        selector: "poId",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Customer",
        selector: "customer",
        center: true,
        sortable: true,
        compact: true,
        wrap: true,
        width: "250px",
      },
      {
        name: "Cabang",
        selector: "cabang",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Nama Cabang",
        selector: "namaCabang",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Total Tagihan",
        selector: "totalTagihan",
        center: true,
        sortable: true,
        compact: true,
      },
    ],
    []
  );

  const ListPoData = useMemo(() => {
    return [
      ...listPo.map((val, i) => ({
        tglCair: val.PENCAIRAN_DATE,
        poId: val.PO_ID,
        customer: `${val.CUSTOMER_ID} - ${val.CUSTOMER_NAME}`,
        cabang: val.BRANCH_ID,
        namaCabang: val.BRANCH_NAME,
        totalTagihan: val.TOTAL_TAGIHAN,
      })),
    ];
  }, [listPo]);

  const ListDetailColumns = useMemo(
    () => [
      {
        name: "Tanggal Cair",
        selector: "tglCair",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Row ID",
        selector: "rowId",
        center: true,
        sortable: true,
        compact: true,
        omit: true,
      },
      {
        name: "PO ID",
        selector: "poId",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Customer",
        selector: "customer",
        center: true,
        sortable: true,
        compact: true,
        wrap: true,
        width: "250px",
      },
      {
        name: "Cabang",
        selector: "cabang",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Nama Cabang",
        selector: "namaCabang",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Total Tagihan",
        selector: "totalTagihan",
        center: true,
        sortable: true,
        compact: true,
      },
    ],
    []
  );

  const ListDetailData = useMemo(() => {
    return [
      ...(detailList === undefined
        ? "null"
        : detailList.map((val, i) => ({
            tglCair: val.PENCAIRAN_DATE,
            rowId: val.ROW_ID,
            poId: val.PO_ID,
            customer: `${val.CUSTOMER_ID} - ${val.CUSTOMER_NAME}`,
            cabang: val.BRANCH_ID,
            namaCabang: val.BRANCH_NAME,
            totalTagihan: val.TOTAL_TAGIHAN,
          }))),
    ];
  }, [detailList]);

  const handleChange = (state) => {
    setSelectedRowsData(state.selectedRows);
  };

  const handleChangeDelete = (state) => {
    setSelectedRowsDataDelete(state.selectedRows);
  };

  const addToDetail = () => {
    if (selectedRowsData.length !== 0) {
      selectedRowsData.map((val) => {
        dispatch(
          AddPoToDetailList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth"),
            disbNo,
            val.poId
          )
        );
      });
      setRender((prev) => !prev);
    } else {
      alert("You haven't select the data...");
    }
  };

  const deleteFromDetail = () => {
    if (selectedRowsDataDelete.length !== 0) {
      selectedRowsDataDelete.map((val) => {
        dispatch(
          DeleteFromDetailList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth"),
            disbNo,
            val.rowId
          )
        );
        setRender((prev) => !prev);
      });
    } else {
      alert("You haven't select the data...");
    }
  };

  const body = (
    <div style={modalStyle} className={classes.modalContainer}>
      <Header {...props} />
      <Filter {...filterProps} />
      <div className={classes.tableBox}>
        <div>
          <Typography variant="body2" color="secondary">
            List PO
          </Typography>
          <DataTable
            columns={ListPoColumns}
            data={ListPoData}
            noHeader
            onSelectedRowsChange={handleChange}
            customStyles={CustomTableStyle}
            selectableRows
            style={{ border: "1px solid rgba(0,0,0,0.2)" }}
          />
        </div>
        <div className={classes.iconBox}>
          <IconButton>
            <ForwardIcon className={classes.iconStyle} onClick={addToDetail} />
          </IconButton>
          <IconButton>
            <ForwardIcon
              style={{
                transform: "rotate(-90deg)",
                color: "red",
              }}
              className={classes.iconStyle}
              onClick={deleteFromDetail}
            />
          </IconButton>
        </div>
        <div>
          <Typography variant="body2" color="secondary">
            List Detail
          </Typography>
          <DataTable
            columns={ListDetailColumns}
            data={detailList.length === 0 ? "" : ListDetailData}
            noHeader
            progressPending={detailList.length === 0 ? true : false}
            clearSelectedRows={clearRows}
            onSelectedRowsChange={handleChangeDelete}
            customStyles={CustomTableStyle}
            selectableRows
            style={{ border: "1px solid rgba(0,0,0,0.2)" }}
          />
        </div>
      </div>
      <Typography variant="caption" color="secondary">
        **If loading takes longer than usual, then there is no data in it**
      </Typography>
    </div>
  );

  return (
    <Modal
      open={toggleModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default TableDisbursementModal;
