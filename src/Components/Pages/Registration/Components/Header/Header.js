import React, { useState } from "react";
import {
  Typography,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import styles from "./Header.module.css";

const TableHeader = ({ filterVal, setFilterVal, filterCol, setFilterCol }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const radioInput = [
    { label: "None", value: "" },
    { label: "ID Kustomer", value: "CUSTOMER_ID" },
    { label: "Nama Kustomer", value: "CUSTOMER_NAME" },
    { label: "Nama Penumpang", value: "PASSANGER_NAME" },
    { label: "ID Penumpang", value: "PASSANGER_ID" },
    { label: "PO ID", value: "PO_ID" },
  ];

  const handleChangeColumn = (e) => {
    setFilterCol(e.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    const { value } = e.currentTarget.dataset;
    setFilterCol(value);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerHeader}>
        <Typography variant="h4">List Registrasi</Typography>
        <div className={styles.contHeaderRight}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <IconButton onClick={handleClick}>
                <FilterListIcon color="primary" />
              </IconButton>
              <div>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: 40 * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {radioInput.map((val, i) => (
                    <MenuItem
                      key={i}
                      data-value={val.value}
                      onClick={handleClose}
                    >
                      <input
                        type="radio"
                        value={val.value}
                        defaultChecked={val.value[0]}
                        checked={filterCol === val.value}
                        onChange={handleChangeColumn}
                      />
                      &nbsp;
                      {val.label}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
            <InputBase
              placeholder="Search...."
              name="filterVal"
              value={filterVal}
              onChange={(e) => setFilterVal(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.menu2}>
        <div className={styles.subMenu2}>
          <span>This Month:</span>
          <span className={styles.valueThisMonth}>20</span>
        </div>
        <div className={styles.subMenu2}>
          <span>On Progress:</span>
          <span className={styles.valueOnProgress}>20</span>
        </div>
        <div className={styles.subMenu2}>
          <span>Approved:</span>
          <span className={styles.valueApproved}>20</span>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
