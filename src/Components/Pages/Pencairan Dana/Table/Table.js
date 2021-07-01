import React, { useState } from "react";
import { Typography, Container, Button } from "@material-ui/core";
import columns from "./TableColumn/Columns";
import listColumns from "./TableColumn/ListColumns";
import useStyles from "./styles";
import DataTable from "react-data-table-component";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";

const Table = ({ fetchedData, fetchedDataList }) => {
  const classes = useStyles();
  const [switchMode, setSwitchMode] = useState(false);

  const toggleSwitch = () => setSwitchMode((prev) => !prev);

  const data = fetchedData.map((val, i) => ({
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
  }));

  const dataList = fetchedDataList.map((val, i) => ({
    no: val.ROW_NUMBER,
    batchPencairan: val.PENCAIRAN_BATCH_ID,
    tanggalPencairan: val.PENCAIRAN_DATE,
    waktuTrf: val.TRANSFER_TIME,
    deskripsi: val.REMARK,
    status: (val.IS_APPROVED === 1 && "A") || (!val.IS_ACTIVE && ""),
    createBy: val.CREATEBY,
  }));

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
          <div className={classes.table}>
            <DataTable
              columns={listColumns}
              data={dataList}
              customStyles={CustomTableStyle}
              conditionalRowStyles={CustomRowBackColor}
              noDataComponent={
                "The data you're searching for is invalid or haven't registered yet"
              }
              noHeader
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
