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
    const {
      data: { rsListDetailPO_Add },
    } = await api.disbursementApi(body);
    console.log(rsListDetailPO_Add);

    return rsListDetailPO_Add;
  } catch (error) {
    console.log(error);
  }
};
