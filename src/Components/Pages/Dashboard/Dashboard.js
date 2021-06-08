import React, { useState } from "react";
import { Navbar, Sidebar, Registration } from "../../";
import { Grow } from "@material-ui/core";
import { BrowserTabs } from "react-browser-tabs";
import styles from "./Dashboard.module.css";

const Dashboard = ({ setIsAuth }) => {
  //Default Tabs
  const defaultTabs = [
    {
      title: "Dashboard",
      url: "stackoverflow.com",
      id: "tab0",
      content: () => <h1>Dashboard</h1>,
    },
  ];

  //State for browser-tabs
  const tabs = useState(defaultTabs);
  const activeTab = useState(0);

  //Add Tab to their respective page
  const addTab = () => {
    activeTab[1](tabs[0].length);
    tabs[1]([
      ...tabs[0],
      {
        title: "Dashboard",
        url: "stackoverflow.com",
        id: "tab0",
        content: () => <h1>Dashboard</h1>,
      },
    ]);
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

  return (
    <div className={styles.dashboard}>
      <Navbar setIsAuth={setIsAuth} />
      <Grow in>
        <div className={styles.dashboardMainContainer}>
          <div className={styles.sideBarContainer}>
            <Sidebar addRegisterTab={addRegisterTab} />
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