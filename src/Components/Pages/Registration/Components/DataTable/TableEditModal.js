import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Paper, Container } from "@material-ui/core";

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
    DANA_TITIPAN_VAL,
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

  const body = (
    <Container maxWidth="sm" style={modalStyle} className={classes.container}>
      <h1>EDIT DATA</h1>
      <h3>APPLICATION DATA</h3>
      <input
        name="APPLICATION_ID"
        value={APPLICATION_ID}
        onChange={(e) =>
          setEditData({ ...editData, [e.target.name]: e.target.value })
        }
      />
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
