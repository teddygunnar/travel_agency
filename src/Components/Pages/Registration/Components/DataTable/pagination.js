import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import useStyles from "./styles";
import { Typography, InputBase } from "@material-ui/core";

const Pagination = ({ nextPage, previousPage, page, setPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.paginationA}>
      <SkipPreviousIcon />
      <ArrowForwardIosIcon
        onClick={previousPage}
        style={
          page === 1
            ? { cursor: "default", transform: "scaleX(-1)" }
            : { cursor: "pointer", transform: "scaleX(-1)" }
        }
      />
      <Typography style={{ color: "black" }} variant="body2">
        Page{" "}
        <InputBase
          className={classes.paginationInput}
          value={page}
          onKeyDown={(e) => setPage(e.target.value)}
        />{" "}
        of 10
      </Typography>
      <ArrowForwardIosIcon style={{ cursor: "pointer" }} onClick={nextPage} />
      <SkipNextIcon />
    </div>
  );
};

export default Pagination;
