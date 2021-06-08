import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 20px",
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
  },

  menuItemsStyle: {
    fontSize: "12px",
    fontWeight: "bold",
  },

  userStyle: {
    textTransform: "capitalize",
    fontSize: "23px ",
    color: "#2E2E2E",
  },

  companyNameStyle: {
    fontWeight: "bold",
    color: "#1D3557",
    fontSize: "30px",
  },
}));
