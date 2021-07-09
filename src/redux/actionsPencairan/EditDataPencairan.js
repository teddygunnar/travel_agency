import * as api from "../../api";

export const editListPencairanDana =
  (user, session, rowId, tanggal, batch, jam, bank, note) => async () => {
    const body = {
      rqEdit: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        ROW_ID: rowId,
        PENCAIRAN_DATE: tanggal,
        PENCAIRAN_BATCH_ID: batch,
        TRANSFER_TIME: jam,
        TRANSFER_BANK_ID: bank,
        REMARK: note,
      },
    };
    try {
      const {
        data: { rsEdit },
      } = await api.editDataPencairan(body);
      console.log(rsEdit);
    } catch (error) {
      console.log(error);
    }
  };
