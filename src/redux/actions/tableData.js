import * as api from "../../api";

export const fetchTableList = (user, session, page) => async () => {
  const body = {
    rqList: {
      COMPANY_ID: "PERTIWI",
      SITE_ID: "JKT",
      USER_ID: user,
      SESSION_LOGIN_ID: session,
      FILTER_DAY: "ALL",
      FILTER_MONTH: "06",
      FILTER_YEAR: "2021",
      FILTER_COLOUMN: "",
      FILTER_VALUE: "",
      PAGE_NO: page,
      PAGE_ROW: "10",
    },
  };
  try {
    const {
      data: { rsList },
    } = await api.TableData(body);
    return Array.from(rsList);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
