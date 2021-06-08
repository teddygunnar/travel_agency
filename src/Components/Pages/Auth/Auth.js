import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

//icons
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Copyright from "@material-ui/icons/Copyright";
import Phone from "@material-ui/icons/Phone";

//auth styles
import useStyles from "./styles";

const Login = ({ setLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setIsMessage] = useState("");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setLogin(username, password);
    } else {
      setIsMessage("Username atau Password tidak dapat ditemukan");
    }
  };

  //LOGIN INTERFACE
  return (
    <div className={classes.login}>
      <div className={classes.loginA}>
        <div>
          <Typography variant="h2" className={classes.heading}>
            Travel
          </Typography>
          <Typography
            variant="h3"
            style={{ color: "white", fontWeight: "bold" }}
          >
            We Provide
          </Typography>
          <span className={classes.spanStyle}>
            The world leading company System
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            style={{ color: "white" }}
            control={<Copyright fontSize="small" />}
            label={
              <span style={{ fontSize: "13px", paddingLeft: 5 }}>
                PT Jala Informatica
              </span>
            }
          />
          <FormControlLabel
            style={{ color: "white" }}
            control={<Phone fontSize="small" />}
            label={
              <span style={{ fontSize: "13px", paddingLeft: 5 }}>
                08170066000
              </span>
            }
          />
        </div>
      </div>

      <div className={classes.loginB}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div style={{ height: 40 }} />
          <div style={{ alignSelf: "flex-start" }}>
            <Typography variant="h5">Welcome</Typography>
            <Typography
              variant="h6"
              style={{ color: "grey", fontSize: "16px" }}
            >
              Enter your username and password
            </Typography>
          </div>
          <div style={{ height: 30 }} />
          <FormControl style={{ width: "100%" }}>
            <Input
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton disabled style={{ padding: 5, color: "#2975D9" }}>
                    <Person />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div style={{ height: 30 }} />
          <div style={{ width: "100%", flexDirection: "row" }}>
            <FormControl style={{ width: "100%" }}>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      disabled
                      style={{ padding: 5, color: "#2975D9" }}
                    >
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div style={{ height: 20 }} />
          <div style={{ alignSelf: "flex-start" }}>
            <FormControlLabel
              style={{ color: "grey" }}
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  style={{ color: "#2975D9" }}
                />
              }
              label={<span style={{ fontSize: "14px" }}>Remember Me</span>}
            />
          </div>

          <div style={{ height: 30 }} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.buttonLogin}
          >
            Login
          </Button>
          <div style={{ height: 15 }} />
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Login;
