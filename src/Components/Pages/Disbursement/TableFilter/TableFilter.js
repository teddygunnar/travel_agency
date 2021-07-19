import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Collapse,
  Button,
} from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";

const TableFilter = ({ setFilter, filter }) => {
  const [collapse, setCollapse] = useState(false);
  const classes = useStyles();
  const options = [
    {
      key: "1",
      text: "Batch 1",
      value: "B1",
    },
    {
      key: "2",
      text: "Batch 2",
      value: "B2",
    },
    {
      key: "3",
      text: "Batch 3",
      value: "B3",
    },
  ];

  const {
    tglPoFrom,
    tglPoTo,
    pencairanBatch,
    pencairanTgl,
    poNo,
    customer,
    cabang,
  } = filter;

  const collapseButton = () => {
    setCollapse((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (e, data) => {
    setFilter({ ...filter, [data.name]: data.value });
  };

  const clear = () => {
    setFilter({
      ...filter,
      tglPoFrom: "",
      tglPoTo: "",
      pencairanBatch: "",
      pencairanTgl: "",
      poNo: "",
      customer: "",
      cabang: "",
    });
  };

  return (
    <div>
      <div className={classes.btnBox}>
        <Button
          endIcon={
            !collapse ? (
              <ExpandMoreIcon />
            ) : (
              <ExpandMoreIcon style={{ transform: "rotate(180deg)" }} />
            )
          }
          onClick={collapseButton}
        >
          Filter
        </Button>
      </div>
      <Collapse in={collapse} collapsedSize={50} className={classes.filterBox}>
        <div className={classes.filterTglBox}>
          <Typography className={classes.filterTitle} gutterBottom>
            Tanggal PO
          </Typography>
          <div
            style={{
              display: "flex",
              width: 550,
              alignItems: "center",
              justifyContent: "center",
            }}
            className="ui input "
          >
            <input
              type="date"
              name="tglPoFrom"
              value={tglPoFrom}
              onChange={handleInputChange}
            />
            <div style={{ margin: "0px 5px" }}>s/d</div>
            <input
              type="date"
              name="tglPoTo"
              value={tglPoTo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Grid container className={classes.pencairanBatchBox}>
          <Grid item>
            <Typography className={classes.filterTitle} gutterBottom>
              Pencairan Batch
            </Typography>
            <Dropdown
              placeholder="Batch"
              options={options}
              selection
              name="pencairanBatch"
              value={pencairanBatch}
              onChange={handleDropdownChange}
              style={{ width: 260.84, height: 38 }}
            />
          </Grid>
          <div style={{ margin: "0px 15px" }} />
          <Grid
            item
            className="ui input"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography className={classes.filterTitle} gutterBottom>
              Pencairan Tanggal
            </Typography>
            <input
              type="date"
              style={{ width: 260.84, height: 38 }}
              name="pencairanTgl"
              value={pencairanTgl}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.inputBox}>
          <Grid
            item
            xs={3}
            className="ui input "
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography className={classes.filterTitle}>PO No.</Typography>
            <input name="poNo" value={poNo} onChange={handleInputChange} />
          </Grid>
          <Grid
            item
            xs={3}
            className="ui input "
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography className={classes.filterTitle}>Customer</Typography>
            <input
              name="customer"
              value={customer}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={3}
            className="ui input "
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography className={classes.filterTitle}>Cabang</Typography>
            <input name="cabang" value={cabang} onChange={handleInputChange} />
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" onClick={clear}>
          Clear
        </Button>
      </Collapse>
    </div>
  );
};

export default TableFilter;
