import * as api from "../../api";

export const fetchTableList =
  (user, session, page, filterCol, filterVal) => async () => {
    const body = {
      rqList: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        FILTER_DAY: "ALL",
        FILTER_MONTH: "ALL",
        FILTER_YEAR: "ALL",
        FILTER_COLOUMN: filterCol,
        FILTER_VALUE: filterVal,
        PAGE_NO: page,
        PAGE_ROW: "10",
        ROW_ID: "",
        FILE_NAME: "",
      },
    };
    try {
      const {
        data: { rsList },
      } = await api.TableData(body);
      return rsList;
      // dispatch({ type: "FETCH_TABLE", payload: dataList });
    } catch (error) {
      console.log(error);
    }
  };
