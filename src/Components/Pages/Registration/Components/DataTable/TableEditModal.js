import React, { useState, useEffect } from "react";
import { Modal, Container, Typography, Grid, Button } from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch } from "react-redux";
import { fetchBranchList } from "../../../../../redux/actions/getBranchList";
import { fetchBankList } from "../../../../../redux/actions/getBankList";
import { fetchBatchList } from "../../../../../redux/actions/getBatchList";
import { editDataList } from "../../../../../redux/actions/edit";
import useStyles from "./styles";
import FormInput from "./CustomTextField";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const EditModal = ({
  toggleModal,
  setToggleModal,
  editData,
  setEditData,
  setRender,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);

  const [branchDetail, setBranchDetail] = useState({
    BRANCH_NAME: "",
    AREA: "",
    FINANCE: "",
  });
  const [branch, setBranch] = useState([]);
  const [listBank, setListBank] = useState([]);
  const [listBatch, setListBatch] = useState([]);

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

  useEffect(() => {
    const getBranchInfo = branch.find((data) => data.BRANCH_ID === BRANCH_ID);

    if (!BRANCH_ID) {
      setBranchDetail({
        ...branchDetail,
        BRANCH_NAME: "",
        AREA: "",
        FINANCE: "",
      });
    } else {
      setBranchDetail({
        ...branchDetail,
        BRANCH_NAME: getBranchInfo?.BRANCH_NAME,
        AREA: getBranchInfo?.LEASING_CITY_ID,
        FINANCE: getBranchInfo?.LEASING_ACQUISITION_ID,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [BRANCH_ID]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to submit changes?")) {
      dispatch(
        editDataList(
          localStorage.getItem("userId"),
          localStorage.getItem("session"),
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
          PASSANGER_BANK_BRANCH
        )
      );
      setRender((prev) => !prev);
      setToggleModal(false);
    } else {
      console.log("maybe later");
    }
  };

  const handleClose = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      setToggleModal(false);
      console.log("exit");
    } else {
      console.log("not exit");
    }
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
      <form onSubmit={handleSubmit}>
        <div>
          <Typography variant="h5" gutterBottom>
            Input PO
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <FormInput
              name="APPLICATION_ID"
              label="Aplikasi NO"
              value={APPLICATION_ID}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              name="PO_ID"
              label="Nomor PO"
              value={PO_ID}
              disabled={true}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              type="date"
              label="Tanggal PO"
              name="PO_DATE"
              value={PO_DATE}
              editData={editData}
              setEditData={setEditData}
              shrink={true}
              size={12}
            />
          </Grid>
        </div>

        <div>
          <Typography variant="h5" gutterBottom>
            Nilai PO
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <FormInput
              name="BRUTO_VAL"
              label="Harga PO"
              type="number"
              value={BRUTO_VAL}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              name="DOWN_PAYMENT_VAL"
              label="Uang Muka"
              type="number"
              value={DOWN_PAYMENT_VAL}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              name="NETTO_VAL"
              value={NETTO_VAL}
              label="Dana Titipan"
              type="number"
              size={12}
              editData={editData}
              setEditData={setEditData}
            />
          </Grid>
        </div>

        <div>
          <Typography variant="h5" gutterBottom>
            Cabang
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <Grid item xs={12}>
              <Dropdown
                name="BRANCH_ID"
                clearable
                search
                selection
                fluid
                options={branchList()}
                placeholder="Pilih Cabang"
                value={BRANCH_ID}
                onChange={(e, data) =>
                  setEditData({ ...editData, [data.name]: data.value })
                }
              />
            </Grid>
            <FormInput
              label="Nama Cabang"
              name="BRANCH_NAME"
              value={branchDetail.BRANCH_NAME}
              disabled={true}
              size={12}
            />
            <FormInput
              label="Wilayah"
              name="AREA"
              value={branchDetail.AREA}
              disabled={true}
            />
            <FormInput
              label="Finance"
              name="FINANCE"
              value={branchDetail.FINANCE}
              disabled={true}
            />
          </Grid>
        </div>

        <div>
          <Typography variant="h5" gutterBottom>
            Informasi Kustomer
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <FormInput
              label="NIK Kustomer"
              name="CUSTOMER_ID"
              value={CUSTOMER_ID}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              label="Nama Kustomer"
              name="CUSTOMER_NAME"
              value={CUSTOMER_NAME}
              editData={editData}
              setEditData={setEditData}
            />
          </Grid>
        </div>
        <div>
          <Typography variant="h5" gutterBottom>
            Informasi Penumpang
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <FormInput
              label="NIK Penumpang"
              name="PASSANGER_ID"
              value={PASSANGER_ID}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              label="Nama Penumpang"
              name="PASSANGER_NAME"
              value={PASSANGER_NAME}
              editData={editData}
              setEditData={setEditData}
            />
            <FormInput
              label="No. Rek"
              name="PASSANGER_BANK_NO"
              value={PASSANGER_BANK_NO}
              size={12}
              editData={editData}
              setEditData={setEditData}
            />

            <Grid item xs={12}>
              <Dropdown
                name="PASSANGER_BANK_NAME"
                clearable
                search
                selection
                fluid
                options={bankList()}
                placeholder="Pilih Bank"
                value={PASSANGER_BANK_NAME}
                onChange={(e, data) =>
                  setEditData({ ...editData, [data.name]: data.value })
                }
              />
            </Grid>
            <FormInput
              label="Bank Cabang"
              name="PASSANGER_BANK_BRANCH"
              value={PASSANGER_BANK_BRANCH}
              editData={editData}
              setEditData={setEditData}
              size={12}
            />
          </Grid>
        </div>

        <div>
          <Typography variant="h5" gutterBottom>
            Informasi Pencairan
          </Typography>
          <Grid container spacing={3} style={{ marginBottom: 15 }}>
            <FormInput
              label="Tanggal Pencairan"
              name="PENCAIRAN_DATE"
              value={PENCAIRAN_DATE}
              type="date"
              shrink={true}
              size={12}
            />
            <Grid item xs={12}>
              <Dropdown
                name="PENCAIRAN_BATCH_ID"
                clearable
                search
                selection
                fluid
                options={batchList()}
                placeholder="Pilih Batch"
                value={PENCAIRAN_BATCH_ID}
                checked={PENCAIRAN_BATCH_ID}
                onChange={(e, data) =>
                  setEditData({ ...editData, [data.name]: data.value })
                }
                style={{ marginTop: "1rem" }}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.buttonBox}>
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

export default EditModal;
