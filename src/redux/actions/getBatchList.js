import * as api from "../../api";

export const fetchBatchList = (user, session) => async () => {
  const body = {
    rqList: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      MASTER_GROUP_ID: "BATCH_ID",
    },
  };
  try {
    const {
      data: {
        rsList: { DATA },
      },
    } = await api.BatchList(body);
    return Array.from(DATA);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
