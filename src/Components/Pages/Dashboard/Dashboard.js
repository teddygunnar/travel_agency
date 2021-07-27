import React, { useState } from "react";
import { Navbar, Sidebar, Registration, Pencairan, Disbursement, Reporting } from "../../";
import { Grow } from "@material-ui/core";
import { BrowserTabs } from "react-browser-tabs";
import styles from "./Dashboard.module.css";

const Dashboard = ({ setIsAuth }) => {
  //Default Tabs
  const defaultTabs = [
    {
      title: "Registrasi",
      url: "stackoverflow.com",
      id: "tab0",
      content: () => <Registration />,
    },
  ];

  //State for browser-tabs
  const tabs = useState(defaultTabs);
  const activeTab = useState(0);

  //Add Tab to their respective page
  const addTab = () => {
    activeTab[1](tabs[0].length);
    tabs[1]([...tabs[0], defaultTabs[0]]);
  };

  const addRegisterTab = () => {
    activeTab[1](tabs[0].length);
    tabs[1]([
      ...tabs[0],
      {
        title: "Registrasi",
        url: "stackoverflow.com",
        id: "tab1",
        content: () => <Registration />,
      },
    ]);
  };

  const addReportingTab = () => {
    activeTab[1](tabs[0].length);
    tabs[1]([
      ...tabs[0],
      {
        title: "Reporting",
        url: "stackoverflow.com",
        id: "tab4",
        content: () => <Reporting />,
      },
    ]);
  }

  const addPencairanTab = () => {
    activeTab[1](tabs[0].length);
    tabs[1]([
      ...tabs[0],
      {
        title: "Pencairan Dana",
        url: "stackoverflow.com",
        id: "tab2",
        content: () => <Pencairan />,
      },
    ]);
  };

  const addDisbursementTab = () => {
    activeTab[1](tabs[0].length);
    tabs[1]([
      ...tabs[0],
      {
        title: "Disbursement",
        url: "stackoverflow.com",
        id: "tab2",
        content: () => <Disbursement />,
      },
    ]);
  };

  // const goToTab = () => {
  //   activeTab[1](tabs[1].length);
  // };

  const tabProps = { addPencairanTab, addRegisterTab, addDisbursementTab, addReportingTab };

  return (
    <div className={styles.dashboard}>
      <Navbar setIsAuth={setIsAuth} />
      <Grow in>
        <div className={styles.dashboardMainContainer}>
          <div className={styles.sideBarContainer}>
            <Sidebar {...tabProps} />
          </div>
          <div className={styles.dashboardMainContent}>
            <BrowserTabs
              onAddTabPress={addTab} // CallBack for a Tab Add
              activeTab={activeTab} // keep a track of active index via state.
              tabs={tabs} // Tabs
            />
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default Dashboard;
