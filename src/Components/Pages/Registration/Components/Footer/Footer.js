import React from "react";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Print from "@material-ui/icons/Print";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.menuFooter}>
      <Button
        component={Link}
        to="/register/add-passenger"
        className={classes.menuFooterButton}
        variant="contained"
        startIcon={<Add fontSize="large" />}
        style={{
          backgroundColor: "#3F63F5",
        }}
      >
        Add New
      </Button>
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
        style={{
          backgroundColor: "#00AF9E",
        }}
        startIcon={<Check fontSize="large" />}
      >
        Closing
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
