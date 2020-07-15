import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./tabpanel";
import Overview from "../content/overview";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="nav-content">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label=""
        className="tabs tabs-transparent navbar-color gradient-45deg-light-blue-cyan"
      >
        <Tab label="Visão Geral" {...a11yProps(0)} />
        <Tab label="Lançamentos" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Overview saldo={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
