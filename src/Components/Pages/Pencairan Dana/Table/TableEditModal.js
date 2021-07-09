import React, { useState, useEffect } from "react";
import {
  Modal,
  Container,
  Grid,
  Typography,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import FormInput from "./CustomTextField";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { editListPencairanDana } from "../../../../redux/actionsPencairan/EditDataPencairan";
import { fetchBankList } from "../../../../redux/actions/getBankList";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const TableEditModal = ({
  setToggleModal,
  toggleModal,
  editData,
  setEditData,
  setRender,
}) => {
  const handleClose = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      setToggleModal(false);
      console.log("exit");
    } else {
      console.log("not exit");
    }
  };

  const classes = useStyles();
  const dispatch = useDispatch();

  const [bankList, setBankList] = useState([]);
  const [modalStyle] = useState(getModalStyle);

  const {
    PENCAIRAN_BATCH_ID,
    PENCAIRAN_DATE,
    REMARK,
    ROW_ID,
    TRANSFER_BANK_ID,
    TRANSFER_TIME,
  } = editData;

  const fetchAPI = async () => {
    setBankList(
      await dispatch(
        fetchBankList(
          localStorage.getItem("userId"),
          localStorage.getItem("auth")
        )
      )
    );
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const bank = () => {
    let array = [];

    bankList.map((val, i) =>
      array.push({
        key: i,
        text: val.MASTER_NAME,
        value: val.MASTER_ID,
      })
    );
    return array;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to submit changes?")) {
      dispatch(
        editListPencairanDana(
          localStorage.getItem("userId"),
          localStorage.getItem("auth"),
          ROW_ID,
          PENCAIRAN_DATE,
          PENCAIRAN_BATCH_ID,
          TRANSFER_TIME,
          TRANSFER_BANK_ID,
          REMARK
        )
      );
      setRender((prev) => !prev);
      setToggleModal(false);
    } else {
      console.log("maybe later");
    }
  };
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const body = (
    <Container
      maxWidth="sm"
      style={modalStyle}
      className={classes.editContainer}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          Edit List Pencairan Dana
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <FormInput
              name="PENCAIRAN_BATCH_ID"
              label="Batch Pencairan"
              value={PENCAIRAN_BATCH_ID}
              disabled
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              name="PENCAIRAN_DATE"
              label="Tanggal Pencairan"
              value={PENCAIRAN_DATE}
              disabled
              type="date"
              inputLabelProps={{ shrink: true }}
              editData={editData}
              setEditData={setEditData}
            />
            <Dropdown
              options={bank()}
              clearable
              search
              selection
              fluid
              name="TRANSFER_BANK_ID"
              value={TRANSFER_BANK_ID}
              placeholder="Pilih Bank"
              style={{ margin: "8px 13px" }}
              onChange={(e, data) =>
                setEditData({ ...editData, [data.name]: data.value })
              }
            />
            <FormInput
              name="TRANSFER_TIME"
              label="Waktu Transfer"
              value={TRANSFER_TIME}
              editData={editData}
              setEditData={setEditData}
              size={12}
            />
            <div style={{ margin: "5px 1rem" }}>
              <Typography variant="h5" gutterBottom>
                Note
              </Typography>
              <TextareaAutosize
                placeholder="Note"
                rowsMin={5}
                rowsMax={5}
                name="REMARK"
                value={REMARK}
                onChange={handleChange}
                style={{
                  width: 525,
                  borderRadius: 5,
                  padding: 5,
                  resize: "none",
                }}
              />
            </div>
          </Grid>
        </div>
        <div className={classes.editButtonBox}>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
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

export default TableEditModal;
