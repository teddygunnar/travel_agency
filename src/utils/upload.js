import {
  BASE,
  SERVER_KEY,
  BASIC_AUTH_USERNAME,
  BASIC_AUTH_PASSWORD,
} from "./constant";
import axios from "axios";

const upload = async (endpoint, body) => {
  const URL = BASE + endpoint;
  return new Promise((resolve, reject) => {
    axios
      .post(URL, body, {
        headers: {
          SERVER_KEY: SERVER_KEY,
          Authorization: `Basic ${btoa(
            BASIC_AUTH_USERNAME + ":" + BASIC_AUTH_PASSWORD
          )}`,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const logger = {
  upload,
};

export default logger;
