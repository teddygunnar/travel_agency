import * as api from "../../api";

export const addPencairan =
  (user, session, tanggal, batch, jam, bank, note) => async () => {
    const body = {
      rqAdd: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        ROW_ID: "",
        PENCAIRAN_DATE: tanggal,
        PENCAIRAN_BATCH_ID: batch,
        TRANSFER_TIME: jam,
        TRANSFER_BANK_ID: bank,
        REMARK: note,
      },
    };
    try {
      const {
        data: { rsAdd },
      } = await api.addDataPencairan(body);
      console.log(rsAdd);
      return rsAdd;
      // dispatch({ type: "FETCH_TABLE", payload: dataList });
    } catch (error) {
      console.log(error);
    }
  };
