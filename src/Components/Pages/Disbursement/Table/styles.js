import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tableBox: {
    marginTop: "1rem",
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

  iconBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0px",
  },
  iconStyle: {
    fontSize: 70,
    color: "cyan",
    transform: "rotate(90deg)",
    cursor: "pointer",
  },
  "&:hover": {
    color: "yellow",
  },

  paginationBox: {
    width: "100%%",
  },

  footer: {
    width: "75%",
  },

  footerBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.5rem",
  },
}));
