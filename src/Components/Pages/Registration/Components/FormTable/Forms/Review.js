import React, { useState, useEffect } from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../../../../../../redux/actions/register";

const Review = ({ formData, back }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [status, setStatus] = useState("00");
  console.log(formData);
  // const history = useHistory();

  const {
    aplikasiNo,
    nomorPo,
    tglPo,
    cabang,
    nikCustomer,
    namaCustomer,
    hargaPo,
    uangMuka,
    titipan,
    tglPencairan,
    batch,
    nikPenumpang,
    namaPenumpang,
    noRek,
    bank,
    bankCabang,
    uploadedFile,
  } = formData;

  console.log(uploadedFile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(
      await dispatch(
        addData(
          localStorage.getItem("userId"),
          localStorage.getItem("auth"),
          aplikasiNo,
          nomorPo,
          tglPo,
          cabang,
          nikCustomer,
          namaCustomer,
          hargaPo,
          uangMuka,
          titipan,
          tglPencairan,
          batch,
          nikPenumpang,
          namaPenumpang,
          noRek,
          bank,
          bankCabang,
          uploadedFile
        )
      )
    );
  };

  useEffect(() => {
    if (status === "01") {
      history.push("/");
    }
  }, [status, history]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6">Do you want to submit?</Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button color="secondary" variant="outlined" onClick={back}>
          No
        </Button>
        <Button color="primary" variant="outlined" onClick={handleSubmit}>
          Yes
        </Button>
      </div>
    </Container>
  );
};

export default Review;
