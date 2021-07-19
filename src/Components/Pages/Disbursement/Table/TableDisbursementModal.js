import React, { useState, useEffect, useMemo } from "react";
import { Modal, Container, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import Filter from "../TableFilter/TableFilter";
import { listOfPo } from "../../../../redux/actionsDisbursement/ListPo";
import { listDetail } from "../../../../redux/actionsDisbursement/ListDetail";
import CustomTableStyle from "./TableStyles/CustomTableStyle";

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);

  const handleClose = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      setToggleModal(false);
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

  const { disbNo } = disburseData;

  const fetchAPI = async () => {
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
    setDetailList(
      await dispatch(
        listDetail(
          localStorage.getItem("userId"),
          localStorage.getItem("auth"),
          disbNo
        )
      )
    );
  };

  useEffect(() => {
    fetchAPI();
  }, [disburseData, filterData]);

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

  console.log(disbNo);
  console.log(detailList);

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
      ...detailList.map((val, i) => ({
        tglCair: val.PENCAIRAN_DATE,
        poId: val.PO_ID,
        customer: `${val.CUSTOMER_ID} - ${val.CUSTOMER_NAME}`,
        cabang: val.BRANCH_ID,
        namaCabang: val.BRANCH_NAME,
        totalTagihan: val.TOTAL_TAGIHAN,
      })),
      {
        tglCair: "",
        poId: "",
        customer: "",
        cabang: "",
        namaCabang: "",
        totalTagihan: "",
      },
    ];
  }, [detailList]);

  const body = (
    <Container style={modalStyle} className={classes.modalContainer}>
      <Header {...props} />
      <hr style={{ margin: "2rem" }} />

      <Filter {...filterProps} />
      <div className={classes.tableBox}>
        <DataTable
          columns={ListPoColumns}
          data={ListPoData}
          noHeader
          dense
          customStyles={CustomTableStyle}
          selectableRows
          style={{ width: "45%", border: "1px solid rgba(0,0,0,0.2)" }}
        />
        <DataTable
          columns={ListDetailColumns}
          data={ListDetailData}
          noHeader
          dense
          customStyles={CustomTableStyle}
          selectableRows
          style={{ width: "45%", border: "1px solid rgba(0,0,0,0.2)" }}
        />
      </div>
    </Container>
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
