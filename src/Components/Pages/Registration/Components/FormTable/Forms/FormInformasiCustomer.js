import React from "react";
import { Typography, TextField, Container, Button } from "@material-ui/core";

const FormInformasiCustomer = ({ setForm, formData, back, next }) => {
  const { nikCustomer, namaCustomer } = formData;

  return (
    <Container maxWidth="sm">
      <Typography variant="h6">Input Informasi Customer</Typography>
      <TextField
        label="NIK"
        name="nikCustomer"
        value={nikCustomer}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Nama"
        name="namaCustomer"
        value={namaCustomer}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
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
        <Button color="primary" variant="contained" fullWidth onClick={back}>
          back
        </Button>
        <div style={{ width: 50 }} />
        <Button color="primary" variant="contained" fullWidth onClick={next}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default FormInformasiCustomer;
