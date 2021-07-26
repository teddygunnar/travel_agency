import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Button, Typography, LinearProgress, Grow } from "@material-ui/core";
import { DisbursementList } from "../../../../redux/actionsDisbursement/List";
import { useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import useStyles from "./styles";
import Modal from "./TableDisbursementModal";
import Pagination from "./Pagination/pagination";
import Footer from "./Footer/Footer";

const Table = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [disburseData, setDisburseData] = useState([]);
  const [page, setPage] = useState(1);
  const [toggleModal, setToggleModal] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const tableModalProps = {
    toggleModal,
    setToggleModal,
    disburseData,
    setDisburseData,
  };

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };
  const previousPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  const handleSubmitData = () => {};
  const handleCancelData = () => {};

  const pageProps = { nextPage, previousPage, page, setPage };
  const footerProps = { handleCancelData, handleSubmitData };

  const fetchAPI = async () => {
    setFetchedData(
      await dispatch(
        DisbursementList(
          localStorage.getItem("userId"),
          localStorage.getItem("auth"),
          page
        )
      )
    );
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleDisburse = useCallback(
    (row) => {
      setToggleModal(true);
      setDisburseData(row);
    },
    [fetchedData]
  );

  const listColumns = useMemo(
    () => [
      {
        name: "No",
        selector: "no",
        center: true,
        sortable: true,
        compact: true,
        width: "50px",
      },
      {
        name: "Row ID",
        selector: "rowId",
        center: true,
        sortable: true,
        omit: true,
        compact: true,
      },
      {
        name: "Disbursement No",
        selector: "disbNo",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Disbursement Date",
        selector: "disbDate",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Keterangan",
        selector: "ket",
        center: true,
        sortable: true,
        compact: true,
      },
      {
        name: "Create By",
        selector: "createBy",
        sortable: true,
        center: true,
        compact: true,
      },
      {
        name: "Action",
        cell: (row) => (
          <Button
            variant="outlined"
            aria-label="edit"
            color="secondary"
            onClick={() => handleDisburse(row)}
          >
            Disburse
          </Button>
        ),
        center: true,
        compact: true,
      },
    ],
    []
  );

  const listData = useMemo(() => {
    return [
      ...fetchedData.map((val, i) => ({
        no: val.ROW_NUMBER,
        rowId: val.ROW_ID,
        disbNo: val.DISBURSEMENT_NO,
        disbDate: val.DISBURSEMENT_DATE,
        ket: val.REMARK,
        createBy: val.CREATEBY,
      })),
    ];
  }, [fetchedData]);

  return (
    <div className={classes.tableContainer}>
      <Modal {...tableModalProps} />
      <Typography variant="h4" color="primary">
        Disbursement List
      </Typography>
      {fetchedData.length === 0 ? (
        <LinearProgress />
      ) : (
        <Grow in>
          <div className={classes.tableBox}>
            <DataTable
              columns={listColumns}
              data={listData}
              noHeader
              customStyles={CustomTableStyle}
              conditionalRowStyles={CustomRowBackColor}
              style={{
                borderLeft: "1px solid rgba(0,0,0,0.2)",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
              }}
            />
            <div className={classes.footerBox}>
              <div className={classes.footer}>
                <Footer {...footerProps} />
              </div>
              <div className={classes.paginationBox}>
                <Pagination {...pageProps} />
              </div>
            </div>
          </div>
        </Grow>
      )}
    </div>
  );
};

export default Table;
