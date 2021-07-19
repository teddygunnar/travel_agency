import React from "react";
import { TextField, Grid } from "@material-ui/core";

const CustomTextField = ({
  name,
  label,
  value,
  editData,
  setEditData,
  type,
  disabled,
  size,
  shrink,
}) => {
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <Grid item xs={!size ? 6 : size}>
      <TextField
        name={name}
        label={label}
        value={value}
        type={type}
        disabled={disabled}
        variant="outlined"
        fullWidth
        required
        InputLabelProps={{ shrink: shrink }}
        onChange={!handleChange ? null : handleChange}
      />
    </Grid>
  );
};

export default CustomTextField;
