import React, { useEffect, useState } from "react";
import { Typography, TextField, Container, Button } from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from "react-redux";
import { fetchBankList } from "../../../../../../redux/actions/getBankList";

const FormJamaah = ({ formData, setForm, next, back }) => {
  const { nikPenumpang, namaPenumpang, noRek, bank, bankCabang } = formData;
  const [listBank, setListBank] = useState([]);

  console.log(formData);

  const options = [
    { key: 1, text: "test1", value: "A" },
    { key: 2, text: "test2", value: "B" },
    { key: 3, text: "test3", value: "C" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = async () => {
      setListBank(
        await dispatch(
          fetchBankList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth")
          )
        )
      );
    };
    fetchAPI();
  }, [dispatch]);

  const bankList = () => {
    let array = [];

    listBank.map((val, i) =>
      array.push({
        key: i,
        text: val.MASTER_NAME,
        value: val.MASTER_ID,
      })
    );
    return array;
  };

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bank) {
      alert("Please choose your bank.");
    } else {
      next();
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Input Informasi Penumpang</Typography>
        <TextField
          label="NIK"
          name="nikPenumpang"
          value={nikPenumpang}
          onChange={handleChange}
          autoComplete="off"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Nama Penumpang"
          name="namaPenumpang"
          value={namaPenumpang}
          onChange={handleChange}
          autoComplete="off"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="No. Rek"
          name="noRek"
          value={noRek}
          onChange={handleChange}
          autoComplete="off"
          variant="outlined"
          required
          margin="normal"
          fullWidth
        />

        <Dropdown
          name="bank"
          clearable
          search
          selection
          fluid
          options={bankList()}
          placeholder="Pilih Bank"
          value={bank}
          onChange={(e, data) =>
            setForm({ ...formData, [data.name]: data.value })
          }
          style={{ height: 50 }}
        />

        <TextField
          label="Bank Cabang"
          name="bankCabang"
          value={bankCabang}
          onChange={handleChange}
          autoComplete="off"
          variant="outlined"
          required
          margin="normal"
          fullWidth
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
          <Button color="primary" variant="outlined" fullWidth type="submit">
            Next
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default FormJamaah;
