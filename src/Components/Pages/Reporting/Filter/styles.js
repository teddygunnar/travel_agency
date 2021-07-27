import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  flexBox: {
    marginTop: "1rem",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },

  left: {
    width: "50%",
    backgroundColor: "blue",
    color: "white",
    padding: 5,
  },

  right: {
    width: "50%",
    backgroundColor: "red",
    color: "white",
    padding: 5,
  },

  center: {
    width: "100%",
    backgroundColor: "yellow",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0px",
  },

  filterBox: {
    border: "1px solid rgba(255,255,255,1)",
    borderRadius: 5,
    padding: 5,
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    marginTop: "1rem",
    height: "5rem",
  },

  typeReportBox: {
    border: "1px solid rgba(255,255,255,1)",
    borderRadius: 5,
    padding: 5,
    marginTop: "1rem",
  },
}));
