import React from 'react';
import './App.css';
import {Header, Segment, Tab} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import OneClick from "./pages/oneClick";
import Checklist from "./pages/Checklist";
import Checkpoints from "./pages/checkpoints";


const App = () => {
  const panes = [
    { menuItem: 'OneClick Configurator', render: () => <Tab.Pane><OneClick /></Tab.Pane> },
    { menuItem: 'Checkpoints', render: () => <Tab.Pane><Checkpoints /></Tab.Pane> },
    { menuItem: 'Checklist', render: () => <Tab.Pane><Checklist /></Tab.Pane> },
  ]
  return (
      <>
        <Header as='h2' attached='top' size={"medium"}>
          Checklist
        </Header>
        <Segment attached>
          <div className={"borderApp"}>
            <Tab panes={panes} />
          </div>
        </Segment>
      </>

  );
};

export default App;
