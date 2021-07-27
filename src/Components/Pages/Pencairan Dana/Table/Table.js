import React, { useState, useMemo, useCallback } from "react";
import {
  Typography,
  Container,
  Button,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import EditModal from "./TableEditModal";
import useStyles from "./styles";
import DataTable from "react-data-table-component";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";

const Table = ({ fetchedData, fetchedDataList, setRender, render }) => {
  const classes = useStyles();
  const [switchMode, setSwitchMode] = useState(false);
  const [editData, setEditData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedRowsData, setSelectedRowsData] = useState([]);

  const props = {
    toggleModal,
    setToggleModal,
    editData,
    setEditData,
    setRender,
  };

  const toggleSwitch = () => setSwitchMode((prev) => !prev);

  const handleEdit = useCallback(
    (row) => {
      setToggleModal(true);
      const findRow = fetchedDataList.find((data) => data.ROW_ID === row.rowId);
      setEditData(findRow);
    },
    [fetchedDataList]
  );

  const columns = useMemo(
    () => [
      {
        name: "No.",
        selector: "no",
        center: true,
        sortable: true,
        compact: true,
        width: "50px",
      },
      {
        name: "Kode Cabang",
        selector: "kodeCabang",
        center: true,
        sortable: true,
        compact: true,
        width: "250px",
      },
      {
        name: "No PO",
        selector: "noPo",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "No Aplikasi",
        selector: "noApp",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Kustomer",
        selector: "kustomer",
        center: true,
        sortable: true,
        compact: true,
        width: "250px",
      },
      {
        name: "Penumpang",
        selector: "penumpang",
        center: true,
        sortable: true,
        compact: true,
        width: "250px",
      },
      {
        name: "No Rek",
        selector: "noRek",
        center: true,
        sortable: true,
        compact: true,
        width: "100px",
      },
      {
        name: "Bank",
        selector: "bank",
        center: true,
        sortable: true,
        compact: true,
        width: "250px",
      },
      {
        name: "Pencairan",
        selector: "pencairan",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Cabang",
        selector: "cabang",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Action",
        cell: (row) => (
          <IconButton
            aria-label="edit"
            color="secondary"
            id={row.no}
            onClick={() => console.log(row)}
          >
            <EditIcon />
          </IconButton>
        ),
        center: true,
        compact: true,
      },
    ],
    []
  );

  const data = useMemo(() => {
    return [
      ...fetchedData.map((val, i) => ({
        no: i + 1,
        kodeCabang: `${val.BRANCH_ID} - ${val.BRANCH_NAME}`,
        noPo: val.PO_ID,
        noApp: val.APPLICATION_ID,
        kustomer: `${val.CUSTOMER_ID} - ${val.CUSTOMER_NAME}`,
        penumpang: `${val.PASSANGER_ID} - ${val.PASSANGER_NAME}`,
        noRek: val.PASSANGER_BANK_NO,
        bank: val.PASSANGER_BANK_NAME,
        pencairan: val.NETTO_VAL,
        cabang: val.BRANCH_NAME,
      })),
    ];
  }, [fetchedData]);

  const listColumns = useMemo(
    () => [
      {
        name: "No.",
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
        compact: true,
        width: "50px",
        omit: true,
      },
      {
        name: "Batch Pencairan",
        selector: "batchPencairan",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Tanggal Pencairan",
        selector: "tanggalPencairan",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Bank",
        selector: "bank",
        center: true,
        sortable: true,
        compact: true,
        width: "190px",
      },
      {
        name: "Waktu Transfer",
        selector: "waktuTrf",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Deskripsi",
        selector: "deskripsi",
        center: true,
        sortable: true,
        compact: true,
        width: "265px",
      },
      {
        name: "Status",
        selector: "status",
        center: true,
        sortable: true,
        compact: true,
        width: "80px",
      },
      {
        name: "Created by",
        selector: "createBy",
        center: true,
        sortable: true,
        compact: true,
        width: "100px",
      },
      {
        name: "Action",
        cell: (row) => (
          <IconButton
            aria-label="edit"
            color="secondary"
            id={row.no}
            onClick={() => handleEdit(row)}
          >
            <EditIcon />
          </IconButton>
        ),
        center: true,
        compact: true,
      },
    ],
    [handleEdit]
  );

  const dataList = useMemo(() => {
    return [
      ...fetchedDataList.map((val, i) => ({
        no: val.ROW_NUMBER,
        rowId: val.ROW_ID,
        batchPencairan: val.PENCAIRAN_BATCH_ID,
        tanggalPencairan: val.PENCAIRAN_DATE,
        bank: val.TRANSFER_BANK_ID,
        waktuTrf: val.TRANSFER_TIME,
        deskripsi: val.REMARK,
        status: (val.IS_APPROVED === 1 && "A") || (!val.IS_ACTIVE && ""),
        createBy: val.CREATEBY,
      })),
    ];
  }, [fetchedDataList]);

  const handleChange = (state) => {
    setSelectedRowsData(state.selectedRows);
  };

  const contextActions = useMemo(() => {
    const handleDelete = () => {};
    return (
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        DELETE
      </Button>
    );
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      {!switchMode ? (
        <div>
          <div>
            <Typography variant="h5">Informasi Detail Pencairan </Typography>
          </div>
          <div className={classes.table}>
            <DataTable
              columns={columns}
              data={data}
              customStyles={CustomTableStyle}
              conditionalRowStyles={CustomRowBackColor}
              selectableRowsComponent={Checkbox}
              selectableRowsComponentProps={{ color: "primary" }}
              noDataComponent={
                !fetchedData.length
                  ? "The data you're searching for is invalid or haven't registered yet"
                  : "Fetching data, please wait..."
              }
              noHeader
              dense
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Typography variant="h5">List Pencairan</Typography>
          </div>
          <EditModal {...props} />
          <div className={classes.table}>
            <DataTable
              columns={listColumns}
              data={dataList}
              selectableRows
              contextActions={contextActions}
              onSelectedRowsChange={handleChange}
              selectableRowsComponent={Checkbox}
              selectableRowsComponentProps={{ color: "primary" }}
              customStyles={CustomTableStyle}
              noHeader={!selectedRowsData.length ? true : false}
              conditionalRowStyles={CustomRowBackColor}
              noDataComponent={
                "The data you're searching for is invalid or haven't registered yet"
              }
              dense
            />
          </div>
        </div>
      )}
      <div className={classes.buttonBox}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          size="large"
          onClick={toggleSwitch}
        >
          {!switchMode
            ? "Lihat List Pencairan"
            : "Lihat Informasi Detail Pencairan"}
        </Button>
      </div>
    </Container>
  );
};

export default Table;
