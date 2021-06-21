import ActionType from "../reducers/constant";
import * as api from "../../api/index.js";
import { useHistory } from "react-router-dom";

export const key = (body) => async (dispatch) => {
  try {
    const getKey = await api.GetClientKey(body);

    const key = getKey.data.CLIENT_KEY;
    // console.log(key);

    dispatch({ type: ActionType.SET_CLIENT_KEY, clientKey: key });
    dispatch({
      type: ActionType.SET_SESSION_LOGIN_ID,
      sessionLoginId: localStorage.getItem("auth"),
    });

    dispatch({
      type: ActionType.SET_USER_ID,
      userId: localStorage.getItem("userId"),
    });
  } catch (error) {
    console.log(error);
  }
};

export const auth = (username, password) => async (dispatch) => {
  const body = {
    rqlogin: {
      USER_ID: username,
      PASSWORD: password,
      IP: "121.131.1313",
    },
  };

  try {
    const userLogin = await api.SignIn(body);
    let { RESULT_CODE } = userLogin.data.rsLogin;
    let SessionLogin =
      userLogin.data.rsLogin.SESSION_LOGIN_INFO[0].SESSION_LOGIN_ID;

    if (RESULT_CODE === "01") {
      localStorage.setItem("auth", SessionLogin);
      localStorage.setItem("userId", username);
      dispatch({
        type: ActionType.SET_SESSION_LOGIN_ID,
        sessionLoginId: SessionLogin,
      });
      dispatch({
        type: ActionType.SET_USER_ID,
        userId: username,
      });
    } else {
      alert("login failed");
    }
    // dispatch({ type: ActionType.LOADING, loading: false });
  } catch (error) {
    console.log(error);
  }
};
