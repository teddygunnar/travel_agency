import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { useDispatch } from "react-redux";
import { fileUpload } from "../../../../../../redux/actions/uploadFile";

const UploadLampiran = ({ back, next, setForm, formData }) => {
  const [fileName, setFileName] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const { uploadedFile } = formData;

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleSubmit = async (files) => {
    setFileName(
      await Promise.all(files.map((f) => dispatch(fileUpload(f.file))))
    );
  };

  useEffect(() => {
    if (fileName.length === 1) {
      setForm({ ...formData, uploadedFile: fileName.toString() });
      setLoaded(true);
    } else if (fileName.length > 1) {
      setForm({ ...formData, uploadedFile: fileName.join(";") });
      setLoaded(true);
    } else {
      setLoaded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileName]);

  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        value={uploadedFile}
        onSubmit={handleSubmit}
      />
      {loaded ? (
        <Typography variant="body1" color="error">
          File Uploaded
        </Typography>
      ) : null}
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
