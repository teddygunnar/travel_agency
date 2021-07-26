import * as api from "../../api";

export const DeleteFromDetailList =
  (user, session, disbNo, rowId) => async () => {
    const body = {
      rqDeleteDetail: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        DISBURSEMENT_NO: disbNo,
        ROW_ID: rowId,
      },
    };
    try {
      const {
        data: { rsDeleteDetail },
      } = await api.disbursementApi(body);
      return rsDeleteDetail.RESULT_DESC;
    } catch (error) {
      console.log(error);
    }
  };
