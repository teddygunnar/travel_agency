import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { useForm } from "react-hooks-helper";
import useStlyes from "./styles";

import InputPOForm from "./Forms/InputPOForm";
import FormInformasiCustomer from "./Forms/FormInformasiCustomer";
import FormJamaah from "./Forms/FormJamaah";
import FormPencairan from "./Forms/FormPencairan";
import Review from "./Forms/Review";

const steps = [
  "Input PO",
  "Informasi Customer",
  "Jamaah/Penumpang",
  "Pencairan",
];

const defaultData = {
  aplikasiNo: "",
  nomorPo: "",
  tglPo: "",
  hargaPo: "",
  uangMuka: "",
  titipan: "",
  cabang: "",
  namaCabang: "",
  wilayah: "",
  finance: "",
  nikCustomer: "",
  namaCustomer: "",
  nikPenumpang: "",
  namaPenumpang: "",
  noRek: "",
  bank: "",
  bankCabang: "",
  tglPencairan: "",
  batch: "",
};

const FormTable = () => {
  const classes = useStlyes();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setForm] = useState(defaultData);

  const [data, setData] = useState([]);

  const next = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const back = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const props = { formData, setForm, next, back, data, setData };
  return (
    <div>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Typography variant="h4" align="center">
          Add New Passenger
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ? <InputPOForm {...props} /> : null}
        {activeStep === 1 ? <FormInformasiCustomer {...props} /> : null}
        {activeStep === 2 ? <FormJamaah {...props} /> : null}
        {activeStep === 3 ? <FormPencairan {...props} /> : null}
        {activeStep === steps.length ? <Review {...props} /> : null}
      </main>
    </div>
  );
};

export default FormTable;
