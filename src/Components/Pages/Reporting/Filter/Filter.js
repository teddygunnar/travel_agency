import React, { useState } from "react";
import { Typography, Button, Container, TextField } from "@material-ui/core";
import useStyles from "./styles";

const Index = () => {
  const classes = useStyles();
  const [radioVal, setRadioVal] = useState("DATE");
  const [radioValType, setRadioValType] = useState("01");

  const radioInput = [
    { label: "Date", value: "DATE" },
    { label: "Month", value: "MONTH" },
    { label: "Year", value: "YEAR" },
    { label: "Range Date", value: "RANGE_DATE" },
    { label: "Range Month", value: "RANGE_MONTH" },
    { label: "Range Year", value: "RANGE_YEAR" },
  ];

  const radioInputTypeReport = [
    {
      label: "Laporan Purchase Order",
      value: "01",
    },
    {
      label: "Laporan Pencairan",
      value: "02",
    },
    {
      label: "Laporan Tagihan",
      value: "03",
    },
  ];

  const handleRadioChange = (e) => {
    setRadioVal(e.target.value);
  };

  const handleRadioTypeChange = (e) => {
    setRadioValType(e.target.value);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.flexBox}>
        <div className={classes.left}>
          <Typography variant="h5" color="inherit">
            Basic Filter
          </Typography>
          <div className={classes.filterBox}>
            {radioInput.map((val, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={i}
                  value={val.value}
                  checked={radioVal === val.value}
                  onChange={handleRadioChange}
                />
                &nbsp; {val.label}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.right}>
          <Typography variant="h5" color="inherit">
            Type Report
          </Typography>
          <div className={classes.typeReportBox}>
            {radioInputTypeReport.map((val, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={i}
                  value={val.value}
                  checked={radioValType === val.value}
                  onChange={handleRadioTypeChange}
                />
                &nbsp; {val.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <TextField
          variant="outlined"
          type="date"
          label="Date"
          disabled={!(radioVal === "DATE")}
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "75%",
        }}
      >
        <Button variant="contained" color="primary">
          Preview
        </Button>
        <Button variant="contained" color="secondary">
          Preview
        </Button>
      </div>
    </Container>
  );
};

export default Index;
