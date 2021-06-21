import React, { useEffect, useState } from "react";
import { Typography, TextField, Container, Button } from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from "react-redux";
import { fetchBranchList } from "../../../../../../redux/actions/getBranchList";
import { useHistory } from "react-router-dom";

const InputPOForm = ({ formData, setForm, next }) => {
  const history = useHistory();
  const {
    aplikasiNo,
    nomorPo,
    tglPo,
    hargaPo,
    uangMuka,
    titipan,
    namaCabang,
    cabang,
    wilayah,
    finance,
  } = formData;

  const [branch, setBranch] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = async () => {
      setBranch(
        await dispatch(
          fetchBranchList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth")
          )
        )
      );
    };
    fetchAPI();
  }, [dispatch]);

  const getBranchInfo = branch.find((data) => data.BRANCH_ID === cabang);
  console.log(getBranchInfo);

  useEffect(() => {
    const getBranchInfo = branch.find((data) => data.BRANCH_ID === cabang);

    if (!cabang) {
      setForm({ ...formData, namaCabang: "", wilayah: "", finance: "" });
    } else {
      setForm({
        ...formData,
        namaCabang: getBranchInfo?.BRANCH_NAME,
        wilayah: getBranchInfo?.LEASING_CITY_ID,
        finance: getBranchInfo?.LEASING_ACQUISITION_ID,
      });
    }
  }, [cabang]);

  const branchList = () => {
    let array = [];

    branch.map((val, i) =>
      array.push({
        key: i,
        text: val.AREA_ID,
        value: val.BRANCH_ID,
      })
    );
    return array;
  };

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cabang) {
      alert("Please choose your branch first");
    } else {
      next();
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Input PO
        </Typography>
        <TextField
          label="Aplikasi NO"
          name="aplikasiNo"
          required
          isRequired="true"
          value={aplikasiNo}
          onChange={handleChange}
          autoComplete="off"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          label="Nomor PO"
          name="nomorPo"
          value={nomorPo}
          onChange={handleChange}
          autoComplete="off"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          label="Tanggal PO"
          name="tglPo"
          value={tglPo}
          onChange={handleChange}
          autoComplete="off"
          variant="outlined"
          margin="normal"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
          Nilai PO
        </Typography>
        <TextField
          required
          label="Harga PO"
          value={hargaPo}
          onChange={handleChange}
          name="hargaPo"
          variant="outlined"
          margin="normal"
          fullWidth
          type="number"
          autoComplete="off"
        />
        <TextField
          required
          label="Uang Muka"
          name="uangMuka"
          value={uangMuka}
          onChange={handleChange}
          autoComplete="off"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          label="Titipan"
          name="titipan"
          value={titipan}
          onChange={handleChange}
          autoComplete="off"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
          Cabang
        </Typography>
        <Dropdown
          name="cabang"
          clearable
          search
          selection
          fluid
          options={branchList()}
          placeholder="Pilih Cabang"
          value={cabang}
          onChange={(e, data) =>
            setForm({ ...formData, [data.name]: data.value })
          }
        />
        <TextField
          required
          label="Nama Cabang"
          name="namaCabang"
          value={namaCabang}
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          label="Wilayah"
          name="wilayah"
          value={wilayah}
          margin="normal"
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          label="Finance"
          name="finance"
          value={finance}
          autoComplete="off"
          margin="normal"
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "3rem 0",
          }}
        >
          <Button
            color="secondary"
            variant="outlined"
            fullWidth
            onClick={() => history.push("/")}
          >
            back to registration list
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

export default InputPOForm;
