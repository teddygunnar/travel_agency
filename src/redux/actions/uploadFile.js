import * as api from "../../api";
import FormData from "form-data";

export const fileUpload = (file) => async () => {
  let data = new FormData();

  data.append("UPLOAD_FILE", file);
  data.append(
    "RAW_DATA",
    `{"rqUpload": {"COMPANY_ID":  "PERTIWI","SITE_ID": "JKT","USER_ID":"dilly","SESSION_LOGIN_ID":"449B07AC0AE6EEA4441852AFD304EED40D6B0EC33766A3B530480D540ECA2224"}}`
  );

  try {
    const {
      data: {
        rsUpload: { FILE_NAME },
      },
    } = await api.uploadFile(data);
    console.log(FILE_NAME);
    return FILE_NAME;
  } catch (error) {
    console.log(error);
  }
};
