import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addData } from "../../../../../../redux/actions/register";

const Review = ({ formData, back }) => {
  const dispatch = useDispatch();

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
        noRek,
        bank,
        bankCabang
      )
    );
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
