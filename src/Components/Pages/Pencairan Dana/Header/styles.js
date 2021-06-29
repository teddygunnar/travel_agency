import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  paper: {
    width: 750,
  },
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "25px",
    width: "100%",
  },

  periodBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "40%",
  },

  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "40%",
    marginRight: "25px",
  },

  flexBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  period: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },

  value: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },

  saveBtn: {
    padding: "15px 25px",
  },
}));
