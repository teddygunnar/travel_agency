import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  TextField,
  Typography,
  Paper,
} from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import useStyles from "./styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useDispatch } from "react-redux";
import { fetchBankList } from "../../../../redux/actions/getBankList";
import { fetchBatchList } from "../../../../redux/actions/getBatchList";
import { addPencairan } from "../../../../redux/actionsPencairan/AddDataPencairan";
import CountUp from "react-countup";

const Header = ({
  formPencairan,
  setFormPencairan,
  fetchedData,
  render,
  setRender,
}) => {
  const [listBank, setListBank] = useState([]);
  const [listBatch, setListBatch] = useState([]);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const { tglPencairan, batchPencairan, jam, bank, note } = formPencairan;

  const fetchAPI = async () => {
    setListBank(
      await dispatch(
        fetchBankList(
          localStorage.getItem("userId"),
          localStorage.getItem("auth")
        )
      )
    );
    setListBatch(
      await dispatch(
        fetchBatchList(
          localStorage.getItem("userId"),
          localStorage.getItem("auth")
        )
      )
    );
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    if (status === "SUCCESS") {
      setRender((prev) => !prev);
      setStatus("")
    }
  }, [render, status]);

console.log(render)

  const batchOptions = listBatch.map((val, i) => ({
    key: i,
    text: val.MASTER_NAME,
    value: val.MASTER_ID,
  }));

  const bankOptions = listBank.map((val, i) => ({
    key: i,
    text: val.MASTER_NAME,
    value: val.MASTER_ID,
  }));

  const handleChange = (e) => {
    setFormPencairan({ ...formPencairan, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (e, data) => {
    setFormPencairan({ ...formPencairan, [data.name]: data.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (bank) {
      setStatus(
        await dispatch(
          addPencairan(
            localStorage.getItem("userId"),
            localStorage.getItem("auth"),
            tglPencairan,
            batchPencairan,
            jam,
            bank,
            note
          )
        )
      );
    } else {
      alert("Gagal: Silahkan isi menu bank");
    }
  };

  const totalPencairan = fetchedData.reduce(
    (total, value) => (total = total + parseInt(value.NETTO_VAL)),
    0
  );

  const totalPo = fetchedData.length;

  console.log(status);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" gutterBottom>
        Pencairan Dana
      </Typography>
      <Paper elevation={1} className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <div className={classes.headers}>
            <div className={classes.periodBox}>
              <Typography variant="h5" gutterBottom>
                Periode
              </Typography>
              <div className={classes.period}>
                <div>
                  <Typography>Tanggal</Typography>
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    name="tglPencairan"
                    value={tglPencairan}
                    onChange={handleChange}
                    placeholder="Tanggal"
                    type="date"
                    style={{ width: 230 }}
                  />
                </div>
              </div>
              <div className={classes.period}>
                <div>
                  <Typography>Batch</Typography>
                </div>
                <div>
                  <Dropdown
                    clearable
                    search
                    fluid
                    selection
                    placeholder="Batch"
                    name="batchPencairan"
                    value={batchPencairan}
                    onChange={handleDropdownChange}
                    options={batchOptions}
                    style={{ width: 230 }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.infoBox}>
              <Typography variant="h5">Info</Typography>
              <div classname={classes.flexBox}>
                <TextareaAutosize
                  placeholder="Note"
                  rowsMin={5}
                  rowsMax={5}
                  name="note"
                  value={note}
                  onChange={handleChange}
                  style={{ width: 250 }}
                />
              </div>
            </div>
          </div>
          <div className={classes.headers}>
            <div className={classes.periodBox}>
              <Typography variant="h5" gutterBottom>
                Realisasi
              </Typography>
              <div className={classes.period}>
                <div>
                  <Typography>Jam</Typography>
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    name="jam"
                    value={jam}
                    onChange={handleChange}
                    placeholder="ex. 13:45"
                    style={{ width: 230 }}
                  />
                </div>
              </div>
              <div className={classes.period}>
                <div>
                  <Typography>Via Bank</Typography>
                </div>
                <div>
                  <Dropdown
                    clearable
                    search
                    fluid
                    selection
                    placeholder="Bank"
                    name="bank"
                    value={bank}
                    onChange={handleDropdownChange}
                    options={bankOptions}
                    style={{ width: 230 }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.periodBox}>
              <Typography variant="h5" gutterBottom>
                Nilai
              </Typography>
              <div className={classes.value}>
                <div>
                  <Typography>Total Pencairan</Typography>
                </div>
                <div>
                  <Typography color="primary" variant="h5">
                    <CountUp
                      start={0}
                      end={totalPencairan}
                      duration={0.6}
                      separator=","
                      prefix="Rp. "
                      suffix=",-"
                    />
                  </Typography>
                </div>
              </div>
              <div className={classes.value}>
                <div>
                  <Typography>Total PO</Typography>
                </div>
                <div>
                  <Typography color="secondary" variant="h5">
                    <CountUp start={0} end={totalPo} duration={0.6} />
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.saveBtn}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ borderRadius: 25 }}
            >
              Save
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Header;
