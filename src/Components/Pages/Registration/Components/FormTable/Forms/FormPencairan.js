import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Typography, TextField, Container, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchBatchList } from "../../../../../../redux/actions/getBatchList";

const FormPencairan = ({ setForm, formData, next, back }) => {
  const { tglPencairan, batch } = formData;

  const [listBatch, setListBatch] = useState([]);

  const options = [
    { key: 1, text: "test1", value: "A" },
    { key: 2, text: "test2", value: "B" },
    { key: 3, text: "test3", value: "C" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = async () => {
      setListBatch(
        await dispatch(
          fetchBatchList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth")
          )
        )
      );
    };
    fetchAPI();
  }, [dispatch]);

  const batchList = () => {
    let array = [];

    listBatch.map((val, i) =>
      array.push({
        key: i,
        text: val.MASTER_NAME,
        value: val.MASTER_ID,
      })
    );
    return array;
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h6">Pencairan</Typography>
      <TextField
        label="Tanggal Pencairan"
        name="tglPencairan"
        value={tglPencairan}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
      <Dropdown
        name="batch"
        clearable
        search
        selection
        fluid
        options={batchList()}
        placeholder="Pilih Batch"
        value={batch}
        checked={batch}
        onChange={(e, data) =>
          setForm({ ...formData, [data.name]: data.value })
        }
        style={{ marginTop: "1rem" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "3rem 0",
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

export default FormPencairan;
