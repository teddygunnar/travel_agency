import React from "react";
import {
  TextField,
  Grid,
  Container,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

const Header = ({ disburseData }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        item
        xs
        direction="column"
        spacing={2}
        className={classes.header}
      >
        <div className={classes.flexbox}>
          <Grid item xs>
            <TextField
              label="No Disbursement"
              variant="outlined"
              fullWidth
              value={disburseData ? disburseData.disbNo : ""}
              disabled
              required
              className={classes.textFieldHeader}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Tgl Disbursement"
              variant="outlined"
              type="date"
              disabled
              value={disburseData ? disburseData.disbDate : ""}
              fullWidth
              InputLabelProps={{ shrink: true }}
              className={classes.textFieldHeader}
            />
          </Grid>
        </div>
        <TextareaAutosize
          placeholder="Keterangan"
          value={disburseData ? disburseData.ket : ""}
          rowsMin={7}
          rowsMax={7}
          className={classes.textareaAutosize}
        />
      </Grid>
    </Container>
  );
};

export default Header;
