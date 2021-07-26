import * as api from "../../api";

export const listDetail = (user, session, disbNo) => async () => {
  const body = {
    rqListDetail: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      DISBURSEMENT_NO: disbNo,
    },
  };
  try {
    const {
      data: { rsListDetail },
    } = await api.disbursementApi(body);
    return rsListDetail;
    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
