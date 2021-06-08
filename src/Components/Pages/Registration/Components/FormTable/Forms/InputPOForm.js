import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Container,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from "react-redux";
import { Autocomplete } from "@material-ui/lab";
import { fetchBranchList } from "../../../../../../redux/actions/getBranchList";

const InputPOForm = ({ formData, setForm, next }) => {
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

  const branchList = () => {
    let array = [];

    branch.map((val, i) =>
      array.push({
        key: i,
        text: val.BRANCH_NAME,
        value: val.BRANCH_ID,
      })
    );
    return array;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Input PO
      </Typography>
      <TextField
        label="Aplikasi NO"
        name="aplikasiNo"
        value={aplikasiNo}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
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
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
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
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
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
        label="Harga"
        name="hargaPo"
        value={hargaPo}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Uang Muka"
        name="uangMuka"
        value={uangMuka}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Titipan"
        name="titipan"
        value={titipan}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
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
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pilih Cabang"
            name="cabang"
            fullWidth
            variant="outlined"
          />
        )}
      />

      <TextField
        required
        label="Nama Cabang"
        disabled
        name="namaCabang"
        value={namaCabang}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Wilayah"
        disabled
        name="wilayah"
        value={wilayah}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Finance"
        disabled
        name="finance"
        value={finance}
        onChange={(e) =>
          setForm({ ...formData, [e.target.name]: e.target.value })
        }
        autoComplete="off"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        color="primary"
        fullWidth
        variant="contained"
        onClick={next}
        style={{ marginTop: "1rem" }}
      >
        Next
      </Button>
    </Container>
  );
};

export default InputPOForm;
