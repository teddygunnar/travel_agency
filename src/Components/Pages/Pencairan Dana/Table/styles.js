import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginBottom: 25,
  },

  editContainer: {
    position: "absolute",
    width: 600,
    height: 500,
    borderRadius: 10,
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },

  editButtonBox: {
    display: "flex",
    flexDirection: " row",
    justifyContent: "space-between",
    margin: "3rem 0",
  },

  table: {
    marginTop: "1rem",
  },

  buttonBox: {
    width: "100%",
    marginTop: "15px",
  },
}));
