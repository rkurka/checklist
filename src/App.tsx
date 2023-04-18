import React from 'react';
import './App.css';
import {Tab} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import OneClick from "./pages/oneClick";
import Checklist from "./pages/Checklist";


const App = () => {

  const panes = [
    { menuItem: 'OneClick Configurator', render: () => <Tab.Pane><OneClick /></Tab.Pane> },
    { menuItem: 'Checkpoints', render: () => <Tab.Pane>TBD Checkpoint Handling</Tab.Pane> },
    { menuItem: 'Checklist', render: () => <Tab.Pane><Checklist /></Tab.Pane> },
  ]

  return (
      <Tab panes={panes} />
  );
};

export default App;