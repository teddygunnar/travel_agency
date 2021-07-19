import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tableBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
    width: "100%",
    justifyContent: "space-between",
  },

  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "90%",
    overflow: "auto",
    borderRadius: 5,
    outline: "none",
    margin: 0,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },

  tableContainer: {
    margin: "1rem",
  },
}));
