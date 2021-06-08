import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  activeButton: {
    textTransform: "capitalize",
    color: "white",
    borderRadius: "10px 10px 0 0",
    marginRight: 5,
    fontSize: 12,
  },

  unactiveButton: {
    textTransform: "capitalize",
    backgroundColor: "white",
    color: "#3F63F5",
    borderRadius: "10px 10px 0 0",
    fontSize: 12,
  },

  paginationBox: {
    width: "25%",
  },

  paginationA: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  paginationInput: {
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 7,
    width: "45px",
    height: "25px",
    padding: "5px 17.5px",
    color: "blue",
  },

  footer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
}));