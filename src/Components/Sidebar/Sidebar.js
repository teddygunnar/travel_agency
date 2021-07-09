import React from "react";
import { Paper } from "@material-ui/core";
import styles from "./Sidebar.module.css";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const Sidebar = ({ addRegisterTab, addPencairanTab, addDisbursementTab }) => {
  return (
    <Paper className={styles.sidebarContainer}>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Menu">
          <TreeItem nodeId="2" label="Registrasi" onClick={addRegisterTab} />
          <TreeItem
            nodeId="3"
            label="Pencairan Dana"
            onClick={addPencairanTab}
          />
          <TreeItem
            nodeId="4"
            label="Disbursement"
            onClick={addDisbursementTab}
          />
        </TreeItem>
      </TreeView>
    </Paper>
  );
};

export default Sidebar;
