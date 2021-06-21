import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import Settings from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./Navbar.module.css";
import useStyles from "./styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Navbar = ({ setIsAuth }) => {
  const [useranchorel, setuseranchorel] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("userId"));

  const classes = useStyles();

  //Breakdown menu user
  const handleClickUser = (event) => {
    setuseranchorel(event.currentTarget);
  };

  const handleCloseUser = () => {
    setuseranchorel(null);
  };

  //Breakdown company list
  const handleClickMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  // const handleCloseMenu = (e) => {
  //   setMenuAnchorEl(null);
  // };

  const MySwal = withReactContent(Swal);

  //LOGOUT function
  const logout = () => {
    localStorage.clear();
    handleCloseUser();
    setIsAuth(null);
    setUser(null);
    MySwal.fire({
      title: <p>You're logged out now!</p>,
      footer: "Thanks for coming!",
    });
  };

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}
    >
      <Typography
        variant="h5"
        color="inherit"
        className={classes.companyNameStyle}
      >
        Travel Agency
      </Typography>
      <Toolbar className={styles.toolBar}>
        <IconButton onClick={handleClickMenu} style={{ borderRadius: 5 }}>
          <Settings
            style={{
              color: "#3f63f5",
            }}
          />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(menuAnchorEl)}
          onClose={() => setMenuAnchorEl(null)}
        >
          <MenuItem>TEST1</MenuItem>
          <MenuItem>TEST2</MenuItem>
        </Menu>
        <Button
          className={styles.userBox}
          onClick={handleClickUser}
          endIcon={<ArrowDropDownIcon />}
        >
          <AccountCircleIcon style={{ margin: "0px 5px" }} />
          <Typography variant="body2" className={classes.userStyle}>
            {user}
          </Typography>
        </Button>
        <Menu
          anchorEl={useranchorel}
          open={Boolean(useranchorel)}
          onClose={handleCloseUser}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleCloseUser}>Profile</MenuItem>
          <MenuItem onClick={logout}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
