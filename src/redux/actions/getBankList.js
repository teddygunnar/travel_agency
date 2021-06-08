import * as api from "../../api";

export const fetchBankList = (user, session) => async () => {
  const body = {
    rqList: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      MASTER_GROUP_ID: "BANK_ID",
    },
  };
  try {
    const {
      data: {
        rsList: { DATA },
      },
    } = await api.BankList(body);
    return Array.from(DATA);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
