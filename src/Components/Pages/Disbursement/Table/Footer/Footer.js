import React from "react";
import { Button } from "@material-ui/core";
import Print from "@material-ui/icons/Print";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";

const Footer = ({ handleCancelData, handleSubmitData }) => {
  const classes = useStyles();
  return (
    <div className={classes.menuFooter}>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          backgroundColor: "#1D3557",
        }}
        startIcon={<Print fontSize="large" />}
      >
        Print
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        onClick={handleCancelData}
        style={{
          backgroundColor: "#F65A7A",
        }}
        startIcon={<Close fontSize="large" />}
      >
        Cancel
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        onClick={handleSubmitData}
        style={{
          backgroundColor: "#00AF9E",
        }}
        startIcon={<Check fontSize="large" />}
      >
        Approve
      </Button>
      <Button
        className={classes.menuFooterMore}
        variant="contained"
        endIcon={<MoreHoriz fontSize="large" style={{ color: "black" }} />}
      ></Button>
    </div>
  );
};

export default Footer;
