import React, { useState } from "react";
import { Dashboard, Auth } from "./Components";
import { useDispatch } from "react-redux";
import { SignIn } from "./api";
import ActionType from "./redux/reducers/constant";

import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));
  const dispatch = useDispatch();

  const setLogin = async (username, password) => {
    const body = {
      rqlogin: {
        USER_ID: username,
        PASSWORD: password,
        IP: "121.131.1313",
      },
    };
    const userLogin = await SignIn(body);
    let { RESULT_CODE } = userLogin.data.rsLogin;
    let SessionLogin =
      userLogin.data.rsLogin.SESSION_LOGIN_INFO[0].SESSION_LOGIN_ID;

    if (RESULT_CODE === "01") {
      localStorage.setItem("auth", SessionLogin);
      localStorage.setItem("userId", username);
      setIsAuth(SessionLogin);
      dispatch({
        type: ActionType.SET_SESSION_LOGIN_ID,
        sessionLoginId: SessionLogin,
      });
      dispatch({
        type: ActionType.SET_USER_ID,
        userId: username,
      });
    } else {
      setIsAuth(null);
    }
    // dispatch({ type: ActionType.LOADING, loading: false });

    console.log(userLogin);
  };

  return !isAuth ? (
    <Auth setLogin={setLogin} />
  ) : (
    <Dashboard setIsAuth={setIsAuth} />
  );
};

export default App;
