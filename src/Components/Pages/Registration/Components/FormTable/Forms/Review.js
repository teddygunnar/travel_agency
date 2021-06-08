import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addData } from "../../../../../../redux/actions/register";
import { useHistory } from "react-router-dom";

const Review = ({ formData, setForm, back, data, setData }) => {
  const dispatch = useDispatch();

  const history = useHistory();

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
    bank,
  } = formData;

  const handleSubmit = () => {
    console.log({ ...formData });
    dispatch(
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
        bank
      )
    );
    history.push("/");
  };
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
        <Button color="primary" variant="contained" onClick={back}>
          back
        </Button>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </Container>
  );
};

export default Review;
