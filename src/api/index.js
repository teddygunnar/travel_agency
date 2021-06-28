import request from "../utils/fetch";
//API REGISTRASI
export const SignIn = (body) => request.post("/SYSMAN/login", body);

export const GetClientKey = (body) => request.post("/SYSMAN/client", body);

export const BranchList = (body) => request.post("/TRAVEL/m_branch", body);

export const BankList = (body) => request.post("/TRAVEL/m_global", body);

export const BatchList = (body) => request.post("/TRAVEL/m_global", body);

export const TableData = (body) => request.post("/TRAVEL/po", body);

export const addNewData = (body) => request.post("/TRAVEL/po", body);

export const deleteData = (body) => request.post("/TRAVEL/po", body);

export const editData = (body) => request.post("/TRAVEL/po", body);

export const cancelData = (body) => request.post("/TRAVEL/po", body);

export const submitData = (body) => request.post("/TRAVEL/po", body);

export const getCustomerList = (body) =>
  request.post("/TRAVEL/m_customer", body);

//API PENCAIRAN DANA
export const TableDataPencairan = (body) =>
  request.post("/TRAVEL/pencairan", body);
