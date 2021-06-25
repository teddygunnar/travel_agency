import * as api from "../../api";

export const cancelDataList = (user, session, poId, rowId) => async () => {
  const body = {
    rqCancel: {
      COMPANY_ID: "TBP",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      PO_ID: poId,
      ROW_ID: rowId,
    },
  };
  try {
    const response = await api.cancelData(body);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
