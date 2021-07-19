import React, { useState, useEffect, useMemo, useCallback } from "react";
import DataTable from "react-data-table-component";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import { Checkbox, Button, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Check from "@material-ui/icons/Check";
import EditModal from "./TableEditModal";
import { TableHeader, Footer } from "../";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import Pagination from "./pagination";
import { fetchTableList } from "../../../../../redux/actions/tableData";
import { deleteDataList } from "../../../../../redux/actions/delete";
import { cancelDataList } from "../../../../../redux/actions/cancel";
import { submitDataList } from "../../../../../redux/actions/submit";

const Table = () => {
  let [page, setPage] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedRowsData, setSelectedRowsData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [render, setRender] = useState(false);
  const [filterVal, setFilterVal] = useState("");
  const [filterCol, setFilterCol] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();

  const props = {
    toggleModal,
    setToggleModal,
    editData,
    setEditData,
    setRender,
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
            page,
            filterCol,
            filterVal
          )
        )
      );
    };
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterVal, filterCol, render, page, dispatch, deleteDataList]);

  const handleEdit = useCallback(
    (row) => {
      setToggleModal(true);
      const findRow = fetchedData.find((data) => data.ROW_ID === row.rowId);
      setEditData(findRow);
    },
    [fetchedData]
  );

  //REACT-DATA-TABLE-COMPONENT THING
  //DON'T MESS IT UP

  const data = useMemo(() => {
    return [
      ...(fetchedData === undefined
        ? "null"
        : fetchedData.map((val, i) => ({
            no: val.ROW_NUMBER,
            customerId: val.CUSTOMER_ID,
            customerName: val.CUSTOMER_NAME,
            poDate: val.PO_DATE,
            branchId: val.BRANCH_ID,
            passangerId: val.PASSANGER_ID,
            passangerName: val.PASSANGER_NAME,
            passangerBank: val.PASSANGER_BANK_NAME,
            passangerBankBranch: val.PASSANGER_BANK_BRANCH,
            created: val.CREATEBY,
            rowId: val.ROW_ID,
            status:
              (val.IS_APPROVED === 1 && "A") ||
              (val.IS_CANCEL === 1 && "R") ||
              (!val.IS_ACTIVE && ""),
            actv: val.IS_ACTIVE === 1 ? <Check /> : false,
            poId: val.PO_ID,
          }))),
    ];
  }, [fetchedData]);

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
        name: "Row ID",
        selector: "rowId",
        center: true,
        omit: true,
        sortable: true,
        compact: true,
      },
      {
        name: "PO ID",
        selector: "poId",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Customer ID",
        selector: "customerId",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Customer Name",
        selector: "customerName",
        center: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "PO Date",
        selector: "poDate",
        center: true,
        sortable: true,
        compact: true,
        width: "100px",
      },
      {
        name: "Branch ID",
        selector: "branchId",
        center: true,
        sortable: true,
        compact: true,
        width: "85px",
      },
      {
        name: "Passanger ID",
        selector: "passangerId",
        sortable: true,
        center: true,
        wrap: true,
        width: "150px",
      },
      {
        name: "Passanger Name",
        selector: "passangerName",
        sortable: true,
        center: true,
        wrap: true,
        width: "150px",
      },
      {
        name: "Passanger Bank",
        selector: "passangerBank",
        center: true,
        sortable: true,
        compact: true,
        width: "250px",
      },
      {
        name: "Passanger Bank Branch",
        selector: "passangerBankBranch",
        center: true,
        sortable: true,
        compact: true,
        width: "125px",
      },

      {
        name: "Row ID",
        selector: "rowId",
        center: true,
        omit: true,
        sortable: true,
        compact: true,
        width: "150px",
      },
      {
        name: "Status",
        selector: "status",
        center: true,
        sortable: true,
        compact: true,
        width: "85px",
      },
      {
        name: "Active",
        selector: "actv",
        center: true,
        sortable: true,
        compact: true,
        width: "85px",
      },
      {
        name: "Created",
        selector: "created",
        center: true,
        sortable: true,
        compact: true,
        width: "85px",
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
  //#############################################
  const handleChange = (state) => {
    setSelectedRowsData(state.selectedRows);
  };

  const handleCancelData = () => {
    if (!selectedRowsData.length) {
      alert("You haven't choose your data");
    } else if (window.confirm("Are you sure you want to cancel this data?")) {
      selectedRowsData.map((val) =>
        dispatch(
          cancelDataList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth"),
            val.poId,
            val.rowId
          )
        )
      );
      setRender((prev) => !prev);
    }
  };

  const handleSubmitData = () => {
    if (!selectedRowsData.length) {
      alert("You haven't choose your data");
    } else if (window.confirm("Are you sure you want to submit this data?")) {
      selectedRowsData.map((val) =>
        dispatch(
          submitDataList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth"),
            val.poId,
            val.rowId
          )
        )
      );
      setRender((prev) => !prev);
    }
  };

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (!selectedRowsData.length) {
        alert("You haven't choose your data");
      } else if (window.confirm("Are you sure you want to delete?")) {
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
        setRender((prev) => !prev);
      } else {
        console.log("you cancel the delete");
      }
    };

    return (
      <Button onClick={handleDelete} variant="contained" color="secondary">
        DELETE
      </Button>
    );
  }, [dispatch, selectedRowsData]);

  return (
    <div>
      <TableHeader
        filterVal={filterVal}
        setFilterVal={setFilterVal}
        filterCol={filterCol}
        setFilterCol={setFilterCol}
      />
      <EditModal {...props} />
      <div>
        <div className={classes.smoothHeaderDrop}>
          <DataTable
            columns={columns}
            data={!fetchedData ? "" : data}
            selectableRows
            contextActions={contextActions}
            selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={checkBoxProps}
            onSelectedRowsChange={handleChange}
            noHeader={!selectedRowsData.length ? true : false}
            noDataComponent={
              !fetchedData
                ? "The data you're searching for is invalid or haven't registered yet"
                : "Fetching data, please wait..."
            }
            selectableRowsHighlight
            customStyles={CustomTableStyle}
            conditionalRowStyles={CustomRowBackColor}
            dense
            style={{ transition: "ease-in-out 1s" }}
          />
          <div className={classes.footer}>
            <Footer
              handleCancelData={handleCancelData}
              handleSubmitData={handleSubmitData}
            />
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
