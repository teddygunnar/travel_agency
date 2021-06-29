import React from "react";
import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import DataTable from "react-data-table-component";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";

const Table = () => {
  const classes = useStyles();

  const columns = [
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
  ];

  const data = [
    {
      no: "1",
      kodeCabang: "4500 - Semarang",
      noPo: "123",
      noApp: "1234",
      kustomer: "1349 - ARIF",
      penumpang: "1254 - ALI",
      noRek: "123456789",
      bank: "BANK MEGA SYARIAH",
      pencairan: "25.000",
      cabang: "SEMARANG",
    },
    {
      no: "2",
      kodeCabang: "2500 - Jakarta",
      noPo: "321",
      noApp: "4321",
      kustomer: "9431 - DHANIS",
      penumpang: "4521 - VANCE",
      noRek: "112233445566",
      bank: "CIMB NIAGA",
      pencairan: "25,000.000",
      cabang: "JAKARTA",
    },
    {},
  ];

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div>
        <Typography variant="h5">Informasi Detail Pencairan </Typography>
      </div>

      <div className={classes.table}>
        <DataTable
          columns={columns}
          data={data}
          customStyles={CustomTableStyle}
          conditionalRowStyles={CustomRowBackColor}
          noHeader
          dense
        />
      </div>
    </Container>
  );
};

export default Table;
