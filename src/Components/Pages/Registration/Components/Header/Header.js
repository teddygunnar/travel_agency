import React from "react";
import { Typography, InputBase, Button } from "@material-ui/core";
import SearchIcon from "../../assets/icons/Icon feather-search.svg";
import FilterIcon from "../../assets/icons/Icon awesome-filter.svg";
import styles from "./Header.module.css";

const TableHeader = ({ filter, setFilter }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerHeader}>
        <Typography variant="h4">List Registrasi</Typography>
        <div className={styles.contHeaderRight}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <Button color="primary">
                <img src={SearchIcon} alt="Search Icon" />
              </Button>
            </div>
            <InputBase
              placeholder="Search...."
              name="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
            <Typography
              style={{ color: "#3F63F5" }}
              align="right"
              variant="body2"
            >
              - No.SR
            </Typography>
            <Button>
              <img src={FilterIcon} alt="Filter Icon" />
            </Button>
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
