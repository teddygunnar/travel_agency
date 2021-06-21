import React from "react";
import { Paper } from "@material-ui/core";
import styles from "./Sidebar.module.css";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const Sidebar = ({ addRegisterTab, goToTab }) => {
  return (
    <Paper className={styles.sidebarContainer}>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Register">
          <TreeItem
            nodeId="2"
            label="Form Registrasi"
            onClick={addRegisterTab}
          />
          <TreeItem nodeId="3" label="go to register tab" onClick={goToTab} />
        </TreeItem>
      </TreeView>
    </Paper>
  );
};

export default Sidebar;
