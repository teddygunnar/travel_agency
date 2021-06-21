import * as api from "../../api";

export const deleteDataList = (user, session, poId, rowId) => async () => {
  const body = {
    rqDelete: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      PO_ID: poId,
      ROW_ID: rowId,
    },
  };
  try {
    const { data } = await api.deleteData(body);
    console.log(data);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
