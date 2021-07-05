import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { useDispatch } from "react-redux";
import { fileUpload } from "../../../../../../redux/actions/uploadFile";

const UploadLampiran = ({ back, next, setForm, formData }) => {
  const [fileName, setFileName] = useState([]);

  const [selectedFile, setSelectedFile] = useState([]);

  const dispatch = useDispatch();

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleSubmit = (files) => {
    files.map((f) => dispatch(fileUpload(f.file)));
  };
  console.log(fileName);

  return (
    <div>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} />
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
