// import React from "react";
// import {
//   TextField,
//   Grid,
//   Container,
//   TextareaAutosize,
//   Typography,
// } from "@material-ui/core";
// import useStyles from "./styles";

// const Header = ({ disburseData }) => {
//   const classes = useStyles();

//   return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         item
//         xs
//         direction="column"
//         spacing={2}
//         className={classes.header}
//       >
//         <div className={classes.flexbox}>
//           <Grid item xs>
//             <TextField
//               label="No Disbursement"
//               variant="outlined"
//               fullWidth
//               value={disburseData ? disburseData.disbNo : ""}
//               disabled
//               required
//               className={classes.textFieldHeader}
//             />
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Tgl Disbursement"
//               variant="outlined"
//               type="date"
//               disabled
//               value={disburseData ? disburseData.disbDate : ""}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               className={classes.textFieldHeader}
//             />
//           </Grid>
//         </div>
//         <TextareaAutosize
//           placeholder="Keterangan"
//           value={disburseData ? disburseData.ket : ""}
//           rowsMin={7}
//           rowsMax={7}
//           className={classes.textareaAutosize}
//         />
//       </Grid>
//     </Container>
//   );
// };

// export default Header;

import React from "react";
import { Typography } from "@material-ui/core";

const Header = ({ disburseData }) => {
  const { disbNo, disbDate, ket } = disburseData;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "1px solid darkblue",
        padding: 10,
      }}
    >
      <Typography variant="body2" color="primary">
        <b>Nomor Disbursement&nbsp;&nbsp;:</b> {disbNo}
      </Typography>
      <Typography variant="body2" color="primary">
        <b>Tanggal Disbursement :&nbsp;</b>
        {disbDate}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        style={{ width: 250, overflow: "auto" }}
      >
        <b>Keterangan :&nbsp;</b>
        {ket}
      </Typography>
    </div>
  );
};

export default Header;
