import React, { useState, useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";
import { columns } from "./Data/TableColumn";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import { Checkbox, Button } from "@material-ui/core";
import { TableHeader, Footer } from "../";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import Pagination from "./pagination";
import { fetchTableList } from "../../../../../redux/actions/tableData";
import { deleteDataList } from "../../../../../redux/actions/delete";

const Table = () => {
  let [page, setPage] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);

  const [selectedRowsData, setSelectedRowsData] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();

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

  const data = useMemo(() => {
    return [
      ...fetchedData.map((val, i) => ({
        no: val.ROW_NUMBER,
        customerId: val.CUSTOMER_ID,
        customerName: val.CUSTOMER_NAME,
        poDate: val.PO_DATE,
        branchId: val.BRANCH_ID,
        passangerId: val.PASSANGER_ID,
        passangerBank: val.PASSANGER_BANK_NAME,
        passangerBankBranch: val.PASSANGER_BANK_BRANCH,
        created: val.CREATEBY,
        rowId: val.ROW_ID,
        poId: val.PO_ID,
      })),
    ];
  }, [fetchedData]);

  const handleChange = (state) => {
    setSelectedRowsData(state.selectedRows);
  };

  console.log(selectedRowsData);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (!selectedRowsData.length) {
        console.log("there is no data in your state");
      } else {
        selectedRowsData.map((val) =>
          dispatch(
            deleteDataList(
              localStorage.getItem("userId"),
              localStorage.getItem("auth"),
              val.poId,
              val.rowId
            )
          )
        );
      }
    };

    return (
      <Button onClick={handleDelete} variant="contained" color="secondary">
        delete
      </Button>
    );
  }, [dispatch, selectedRowsData]);

  return (
    <div>
      <TableHeader />
      <div>
        <div>
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            contextActions={contextActions}
            selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={checkBoxProps}
            onSelectedRowsChange={handleChange}
            noDataComponent={"Fetching data, please wait..."}
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
      </div>
    </div>
  );
};

export default Table;
