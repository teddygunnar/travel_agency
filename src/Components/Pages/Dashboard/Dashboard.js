import React, { useState } from "react";
import { Navbar, Sidebar, Registration } from "../../";
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

  const x = tabs.find((data) => data);
  console.log(x[0]);
  console.log(activeTab);

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

  const goToTab = () => {
    activeTab[1](tabs[1].length);
  };

  return (
    <div className={styles.dashboard}>
      <Navbar setIsAuth={setIsAuth} />
      <Grow in>
        <div className={styles.dashboardMainContainer}>
          <div className={styles.sideBarContainer}>
            <Sidebar addRegisterTab={addRegisterTab} goToTab={goToTab} />
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
