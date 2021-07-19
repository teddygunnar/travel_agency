import * as api from "../../api";

export const listOfPo =
  (user, session, poDateFrom, poDateTo, batch, date, branch, poNo, customer) =>
  async () => {
    const body = {
      rqListDetailPO: {
        COMPANY_ID: "PERTIWI",
        SITE_ID: "JKT",
        USER_ID: user,
        SESSION_LOGIN_ID: session,
        ROW_ID: "",
        FILTER_PO_DATE_FROM: poDateFrom,
        FILTER_PO_DATE_TO: poDateTo,
        FILTER_PENCAIRAN_BATCH_ID: batch,
        FILTER_PENCAIRAN_DATE: date,
        FILTER_BRANCH_ID: branch,
        FILTER_PO_ID: poNo,
        FILTER_CUSTOMER_NAME: customer,
      },
    };
    try {
      const {
        data: { rsListDetailPO },
      } = await api.disbursementApi(body);
      console.log(rsListDetailPO);
      return rsListDetailPO;
      // dispatch({ type: "FETCH_TABLE", payload: dataList });
    } catch (error) {
      console.log(error);
    }
  };
