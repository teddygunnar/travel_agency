import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  TextField,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from "react-redux";
import { fetchBranchList } from "../../../../../redux/actions/getBranchList";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    width: 600,
    height: 500,
    borderRadius: 10,
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
}));

const EditModal = ({ toggleModal, setToggleModal, editData, setEditData }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const handleClose = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      setToggleModal(false);
      console.log("exit");
    } else {
      console.log("not exit");
    }
  };

  const {
    ROW_ID,
    APPLICATION_ID,
    PO_ID,
    PO_DATE,
    BRANCH_ID,
    CUSTOMER_ID,
    CUSTOMER_NAME,
    BRUTO_VAL,
    DOWN_PAYMENT_VAL,
    NETTO_VAL,
    PENCAIRAN_DATE,
    PENCAIRAN_BATCH_ID,
    PASSANGER_ID,
    PASSANGER_NAME,
    PASSANGER_BANK_NO,
    PASSANGER_BANK_NAME,
    PASSANGER_BANK_BRANCH,
  } = editData;

  console.log(editData);
  console.log(editData.APPLICATION_ID);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const body = (
    <Container maxWidth="sm" style={modalStyle} className={classes.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          Edit Data
        </Typography>
      </div>
      <form>
        <div>
          <Typography variant="h5" gutterBottom>
            Input PO
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Aplikasi NO"
                name="APPLICATION_ID"
                variant="outlined"
                value={APPLICATION_ID}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                label="Nomor PO"
                name="PO_ID"
                variant="outlined"
                value={PO_ID}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="date"
                label="Tanggal PO"
                name="PO_DATE"
                variant="outlined"
                value={PO_DATE}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Typography variant="h5" gutterBottom>
            Nilai PO
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Harga PO"
                name="BRUTO_VAL"
                variant="outlined"
                value={BRUTO_VAL}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Uang Muka"
                name="DOWN_PAYMENT_VAL"
                variant="outlined"
                value={DOWN_PAYMENT_VAL}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Dana Titipan"
                name="NETTO_VAL"
                variant="outlined"
                value={NETTO_VAL}
                onChange={handleChange}
                fullWidth
                type="number"
              />
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );

  return (
    <div>
      <Modal
        open={toggleModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default EditModal;
