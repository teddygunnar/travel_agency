import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuFooter: {
    width: 500,
    borderRadius: 5,
    borderBottomRightRadius: 0,
    padding: 10,
  },

  menuFooterButton: {
    marginRight: 10,
    paddingRight: 10,
    borderRadius: 50,
    color: "white",
    textTransform: "none",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  menuFooterMore: {
    paddingRight: 25,
    borderRadius: "50px",
    backgroundColor: "white",
    color: "grey",
    textTransform: "none",
  },
}));
