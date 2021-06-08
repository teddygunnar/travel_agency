import React from "react";
import { Button } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import ReplayIcon from "@material-ui/icons/Replay";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.menuFooter}>
      <Button
        component={Link}
        to="/"
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#3F63F5",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<SaveIcon fontSize="large" />}
      >
        Save
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#1D3557",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<ReplayIcon fontSize="large" />}
      >
        Reset
      </Button>
      <Button
        className={classes.menuFooterButton}
        variant="contained"
        style={{
          borderRadius: 50,
          backgroundColor: "#F65A7A",
          color: "white",
          textTransform: "none",
        }}
        startIcon={<Close fontSize="large" />}
      >
        Cancel
      </Button>
    </div>
  );
};

export default Footer;
