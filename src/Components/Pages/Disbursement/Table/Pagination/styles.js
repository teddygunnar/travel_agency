import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paginationA: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  paginationInput: {
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 7,
    width: "45px",
    height: "25px",
    padding: "5px 17.5px",
    color: "blue",
  },
}));
