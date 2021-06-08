import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Columns from "./Data/TableColumn";
import AddData from "./Data/AddTableData";
import AddColumns from "./Data/AddTableColumn";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import AddCustomTableStyle from "./TableStyles/AddCustomTableStyle";
import AddCustomRowBackColor from "./TableStyles/AddCustomRowBackColor";
import { Checkbox, Button, CircularProgress } from "@material-ui/core";
import { TableHeader, Footer } from "../";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import Pagination from "./pagination";

import { fetchTableList } from "../../../../../redux/actions/tableData";

const Table = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [mainInfo, setMainInfo] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  let [page, setPage] = useState(1);

  const switchMode = () => {
    setMainInfo((prevMainInfo) => !prevMainInfo);
  };

  const checkBoxProps = {
    color: "primary",
  };

  //Next Table Page
  const nextPage = () => {
    setPage(page + 1);
  };

  //Previous Table Page
  const previousPage = () => {
    if ((page = 1)) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedData(
        await dispatch(
          fetchTableList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth"),
            page
          )
        )
      );
    };
    fetchAPI();
  }, [page, dispatch]);

  console.log(fetchedData);

  const dataArray = () => {
    let array = [];

    fetchedData.map((val, i) =>
      array.push({
        no: val.ROW_NUMBER,
        customerId: val.CUSTOMER_ID,
        customerName: val.CUSTOMER_NAME,
        poDate: val.PO_DATE,
        branchId: val.BRANCH_ID,
        passangerId: val.PASSANGER_ID,
        passangerBank: val.PASSANGER_BANK_NAME,
        passangerBankBranch: val.PASSANGER_BANK_BRANCH,
        created: val.CREATEBY,
      })
    );
    return array;
  };

  return (
    <div>
      <TableHeader />
      <div>
        {!fetchedData.length ? (
          <CircularProgress />
        ) : (
          <div>
            {mainInfo ? (
              <div>
                <Button
                  variant="contained"
                  className={classes.activeButton}
                  disabled
                  onClick={switchMode}
                  style={{ backgroundColor: "#2975D9", color: "white" }}
                >
                  Main Info
                </Button>
                <Button
                  variant="contained"
                  className={classes.unactiveButton}
                  onClick={switchMode}
                >
                  Additional Info
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="contained"
                  className={classes.unactiveButton}
                  onClick={switchMode}
                >
                  Main Info
                </Button>
                <Button
                  variant="contained"
                  className={classes.activeButton}
                  disabled
                  style={{ backgroundColor: "#2975D9", color: "white" }}
                  onClick={switchMode}
                >
                  Additional Info
                </Button>
              </div>
            )}

            {mainInfo ? (
              <div>
                <DataTable
                  columns={Columns}
                  data={dataArray()}
                  selectableRows
                  selectableRowsComponent={Checkbox}
                  selectableRowsComponentProps={checkBoxProps}
                  noContextMenu={true}
                  noHeader={true}
                  selectableRowsHighlight
                  customStyles={CustomTableStyle}
                  conditionalRowStyles={CustomRowBackColor}
                  dense
                />
                <div className={classes.footer}>
                  <Footer />
                  <div className={classes.paginationBox}>
                    <Pagination
                      nextPage={nextPage}
                      previousPage={previousPage}
                      page={page}
                      setPage={setPage}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <DataTable
                  columns={AddColumns}
                  data={AddData()}
                  selectableRows
                  selectableRowsComponent={Checkbox}
                  selectableRowsComponentProps={checkBoxProps}
                  noContextMenu={true}
                  noHeader={true}
                  selectableRowsHighlight
                  customStyles={AddCustomTableStyle}
                  conditionalRowStyles={AddCustomRowBackColor}
                  pagination
                />
                <Footer />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
