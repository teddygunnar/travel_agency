import * as api from "../../api/index.js";

export const addData =
  (
    user,
    session,
    aplikasiNo,
    nomorPo,
    tglPo,
    cabang,
    nikCustomer,
    namaCustomer,
    hargaPo,
    uangMuka,
    titipan,
    tglPencairan,
    batch,
    nikPenumpang,
    namaPenumpang,
    noRek,
    bank,
    bankCabang
  ) =>
  async () => {
    const body = {
      rqAdd: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        ROW_ID: "",
        APPLICATION_ID: aplikasiNo,
        PO_ID: nomorPo,
        PO_DATE: tglPo,
        BRANCH_ID: cabang,
        CUSTOMER_ID: nikCustomer,
        CUSTOMER_NAME: namaCustomer,
        BRUTO_VAL: hargaPo,
        OTHER_PAYMENT1_VAL: "0",
        OTHER_PAYMENT2_VAL: "0",
        DOWN_PAYMENT_VAL: uangMuka,
        DANA_TITIPAN_VAL: titipan,
        PENCAIRAN_DATE: tglPencairan,
        PENCAIRAN_BATCH_ID: batch,
        PASSANGER_ID: nikPenumpang,
        PASSANGER_NAME: namaPenumpang,
        PASSANGER_BANK_NO: noRek,
        PASSANGER_BANK_NAME: bank,
        PASSANGER_BANK_BRANCH: bankCabang,
      },
    };

    try {
      const response = await api.addNewData(body);
      console.log(response);
      let { RESULT_CODE } = response.data.rsAdd;
      let message = response.data.rsAdd.RESULT_MESSAGE;

      if (RESULT_CODE === "01") {
        alert("Successfully submitted");
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
