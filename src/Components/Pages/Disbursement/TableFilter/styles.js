import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  btnBox: {
    widht: "100%",
    display: "flex",
  },
  filterTglBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  pencairanBatchBox: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: "15px 0px",
  },

  filterTitle: {
    fontWeight: "bold",
  },

  filterBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: "5px 0px 5px 5px",
  },

  inputBox: {
    justifyContent: "space-around",
    marginBottom: 25,
  },
  clearBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },

  btnClear: {
    width: "25%",
  },
}));
