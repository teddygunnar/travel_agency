import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { DataTable, FormTable } from "./Components";
import styles from "./styles.module.css";

const StoreRequisition = ({ selectCompany }) => {
  return (
    <MemoryRouter>
      <div className={styles.body}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <DataTable selectCompany={selectCompany} />}
          />
          <Route
            exact
            path="/register/add-passenger"
            component={() => <FormTable />}
          />
        </Switch>
      </div>
    </MemoryRouter>
  );
};

export default StoreRequisition;
