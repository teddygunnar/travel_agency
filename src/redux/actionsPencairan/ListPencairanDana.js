import * as api from "../../api";

export const fetchTablePencairanList = (user, session) => async () => {
  const body = {
    rqList: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      FILTER_DAY: "ALL",
      FILTER_MONTH: "ALL",
      FILTER_YEAR: "ALL",
      FILTER_COLOUMN: "",
      FILTER_VALUE: "",
      PAGE_NO: "1",
      PAGE_ROW: "10",
      ROW_ID: "",
    },
  };
  try {
    const {
      data: { rsList },
    } = await api.TableDataPencairan(body);
    return rsList;
    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
