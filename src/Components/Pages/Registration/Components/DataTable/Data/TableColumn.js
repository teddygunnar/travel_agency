import React from "react";
import { IconButton, Modal } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

export const columns = [
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
    width: "150px",
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
    width: "125px",
  },
  {
    name: "Created",
    selector: "created",
    center: true,
    sortable: true,
    width: "85px",
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
    cell: (row) => (
      <IconButton
        aria-label="edit"
        color="secondary"
        onClick={() => console.log(row)}
      >
        <EditIcon />
      </IconButton>
    ),
  },
];
