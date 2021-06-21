import React from "react";
import { Button } from "@material-ui/core";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const UploadLampiran = ({ back, next, setForm, formData }) => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    console.log(files.map((f) => f.meta));
  };
  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button color="secondary" variant="outlined" fullWidth onClick={back}>
          back
        </Button>
        <div style={{ width: 50 }} />
        <Button color="primary" variant="outlined" fullWidth onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default UploadLampiran;
