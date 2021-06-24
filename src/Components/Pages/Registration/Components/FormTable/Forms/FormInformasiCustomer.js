import React, { useEffect, useState } from "react";
import { Typography, TextField, Container, Button } from "@material-ui/core";
import { fetchCustomerList } from "../../../../../../redux/actions/getCustomerList";
import { useDispatch } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";

const FormInformasiCustomer = ({ setForm, formData, back, next }) => {
  const { nikCustomer, namaCustomer } = formData;
  const [customerList, setCustomerList] = useState([]);
  const dispatch = useDispatch();

  //AUTOCOMPLETE THINGS OR WHATEVER
  //###############################

  //State for Autocomplete
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  //Change handler for autocomplete
  const handleAutocompleteChange = (option, newValue) => {
    if (newValue) {
      setValue(newValue);
      setForm({ ...formData, nikCustomer: newValue.value });
    } else {
      setValue("");
      setForm({ ...formData, nikCustomer: "" });
    }
  };

  const getCustName = customerList.find(
    (data) => data.CUSTOMER_ID === nikCustomer
  );

  useEffect(() => {
    if (nikCustomer || value) {
      setValue({ label: nikCustomer, value: nikCustomer });
      setForm({
        ...formData,
        namaCustomer: getCustName?.CUSTOMER_NAME,
      });
    } else {
      setForm({ ...formData, namaCustomer: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nikCustomer, namaCustomer]);

  console.log(formData);

  useEffect(() => {
    if (nikCustomer) {
      setForm({
        ...formData,
        namaCustomer: namaCustomer ? namaCustomer : getCustName?.CUSTOMER_NAME,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namaCustomer]);

  const handleInputChange = (option, newValue) => {
    if (newValue) {
      setInputValue(newValue);
      setForm({ ...formData, nikCustomer: newValue });
    } else {
      setInputValue(newValue);
    }
  };

  //Change handler for send data
  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setCustomerList(
        await dispatch(
          fetchCustomerList(
            localStorage.getItem("userId"),
            localStorage.getItem("auth")
          )
        )
      );
    };
    fetchAPI();
  }, [dispatch]);

  const customer = () => {
    let array = [];

    customerList.map((val, i) =>
      array.push({
        key: i,
        label: val.CUSTOMER_ID + ` - ${val.CUSTOMER_NAME}`,
        value: val.CUSTOMER_ID,
      })
    );
    return array;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Input Informasi Customer</Typography>
        <Autocomplete
          freeSolo
          style={{ marginTop: "1rem" }}
          options={customer()}
          name="value"
          value={value}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={handleAutocompleteChange}
          getOptionLabel={(option) =>
            // value || ""
            //   ? option.value
            //     ? option.value
            //     : ""
            //   : option.label
            //   ? option.label
            //   : ""
            option ? option.label : ""
          }
          getOptionSelected={(option, selectedValue) =>
            option.value === selectedValue.value
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Masukkan NIK"
              variant="outlined"
              required
            />
          )}
        />

        <TextField
          label="Nama"
          name="namaCustomer"
          required
          value={namaCustomer}
          onChange={inputValue ? handleChange : ""}
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
          <Button color="secondary" variant="outlined" fullWidth onClick={back}>
            back
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

export default FormInformasiCustomer;
