import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  textareaAutosize: {
    width: 325,
    borderRadius: 5,
    padding: 15,
    resize: "none",
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "2rem",
  },

  flexbox: {
    width: "30%",
  },

  textFieldHeader: {
    marginBottom: 15,
  },

  titleHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
}));
