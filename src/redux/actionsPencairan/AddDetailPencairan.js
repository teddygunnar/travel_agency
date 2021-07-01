import * as api from "../../api";

export const addDetailListPencairan =
  (user, session, tanggal, batch) => async () => {
    const body = {
      rqListDetail: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        ROW_ID: "",
        PENCAIRAN_DATE: tanggal,
        PENCAIRAN_BATCH_ID: batch,
      },
    };
    try {
      const {
        data: { rsListDetail },
      } = await api.addDataPencairan(body);
      console.log(rsListDetail);
      return rsListDetail;
      // dispatch({ type: "FETCH_TABLE", payload: dataList });
    } catch (error) {
      console.log(error);
    }
  };
