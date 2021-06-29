import React from "react";
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

const Header = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" gutterBottom>
        Pencairan Dana
      </Typography>
      <Paper elevation={3} className={classes.paper}>
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
                <Dropdown clearable search selection placeholder="Tanggal" />
              </div>
            </div>
            <div className={classes.period}>
              <div>
                <Typography>Batch</Typography>
              </div>
              <div>
                <Dropdown clearable search selection placeholder="Batch" />
              </div>
            </div>
          </div>
          <div className={classes.infoBox}>
            <Typography variant="h5">Info</Typography>
            <div classname={classes.flexBox}>
              <TextareaAutosize placeholder="Note" rowsMin={5} />
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
                  placeholder="ex. 13:45"
                />
              </div>
            </div>
            <div className={classes.period}>
              <div>
                <Typography>Cabang</Typography>
              </div>
              <div>
                <Dropdown clearable search selection />
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
                <Typography>Rp.45.000,000,-</Typography>
              </div>
            </div>
            <div className={classes.value}>
              <div>
                <Typography>Total PO</Typography>
              </div>
              <div>
                <Typography>420</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.saveBtn}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Header;
