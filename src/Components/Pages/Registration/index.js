import React from "react";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import { DataTable, FormTable } from "./Components";
import styles from "./styles.module.css";

const StoreRequisition = ({ selectCompany }) => {
  return (
    <Router>
      <div className={styles.body}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <DataTable selectCompany={selectCompany} />}
          />
          <Route exact path="/add-passenger" component={() => <FormTable />} />
        </Switch>
      </div>
    </Router>
  );
};

export default StoreRequisition;
