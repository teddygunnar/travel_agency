import request from "../utils/fetch";

export const SignIn = (body) => request.post("/SYSMAN/login", body);

// export const signIn = (formData) => request.post("/SYSMAN/login", formData);

// export const CompanyList = (body) => request.post("/SYSMAN/structure", body);

export const GetClientKey = (body) => request.post("/SYSMAN/client", body);

export const TableData = (body) => request.post("/TRAVEL/po", body);

export const BranchList = (body) => request.post("/TRAVEL/m_branch", body);

export const BankList = (body) => request.post("/TRAVEL/m_global", body);

export const BatchList = (body) => request.post("/TRAVEL/m_global", body);

export const addNewData = (body) => request.post("/TRAVEL/po", body);

export const deleteData = (body) => request.post("/TRAVEL/po", body);

export const getCustomerList = (body) =>
  request.post("/TRAVEL/m_customer", body);
