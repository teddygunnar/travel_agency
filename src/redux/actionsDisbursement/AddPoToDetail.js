import * as api from "../../api";

export const AddPoToDetailList = (user, session, disbNo, poId) => async () => {
  const body = {
    rqListDetailPO_Add: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      ROW_ID: "",
      DISBURSEMENT_NO: disbNo,
      PO_ID: poId,
    },
  };
  try {
    const response = await api.disbursementApi(body);
    console.log(response);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
