import * as api from "../../api";

export const submitDataList = (user, session, poId, rowId) => async () => {
  const body = {
    rqSubmit: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      PO_ID: poId,
      ROW_ID: rowId,
      NOTE: "NOTE",
      DELEGATE_BY: "",
      IP_ADDRESS: "10.10.10.10",
      CODE_STATUS: "4",
    },
  };
  try {
    const { data } = await api.submitData(body);
    console.log(data);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
