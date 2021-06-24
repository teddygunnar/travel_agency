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
    } else {
      setValue("");
    }
  };

  const handleInputChange = (option, newValue) => {
    newValue ? setInputValue(newValue) : setInputValue("");
  };

  useEffect(() => {
    if (!value) {
      setValue({ label: nikCustomer, value: nikCustomer });
    }
  }, [value, nikCustomer]);

  //Change handler to send the value data to cabang's state both for input and selected value
  useEffect(() => {
    setForm({ ...formData, nikCustomer: value.title });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    setForm({ ...formData, nikCustomer: inputValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  //###############################
  useEffect(() => {
    const getCustName = customerList.find(
      (data) => data.CUSTOMER_ID === nikCustomer
    );
    if (!nikCustomer || null) {
      setForm({ ...formData, namaCustomer: "" });
    } else {
      setForm({ ...formData, namaCustomer: getCustName?.CUSTOMER_NAME });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, nikCustomer]);

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

  console.log(customer());

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
            value || ""
              ? option.value
                ? option.value
                : ""
              : option.label
              ? option.label
              : ""
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
          onChange={!value ? handleChange : ""}
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
