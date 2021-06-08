import { makeStyles } from "@material-ui/core/styles";
import background from "../../Assets/Images/Liquid-Cheese.svg";

export default makeStyles((theme) => ({
  login: {
    height: "100vh",
    width: "100%",
    display: "flex",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "500px",
    minWidth: "800px",
  },

  loginA: {
    width: "50%",
    height: "calc(100% - 200px)",
    margin: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  loginB: {
    width: "50%",
    height: "calc(100% - 200px)",
    margin: "100px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  form: {
    width: "350px",
    height: "430px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    padding: "10px 30px",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0px 2px 5px rgba(0,0,0,.2)",
  },

  buttonLogin: {
    width: "100%",
    height: 50,
    borderRadius: 100,
  },

  spanStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  heading: {
    color: "white",
    textDecoration: "none",
  },
}));
