import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Container } from '@material-ui/core';

import BottomNav from './component/layout/BottomNav';

import Home from './component/Home';
import MainTask from './component/tasks/MainTask';
import Tasks from './component/tasks/Tasks';
import Task from './component/tasks/Task';
import AddTask from './component/tasks/AddTask';
import QRcode from './component/QRcode';
import CreateQR from './component/CreateQR';

function App() {
  return (
    <Router className="App">
      <Container className="main" maxWidth="sm">
        <Route exact path="/" component={Home} />
        <Route exact path="/task/main" component={MainTask} />
        <Route exact path="/task/tasks/:isCompleted" component={Tasks} />
        <Route exact path="/task/task/:taskid" component={Task} />
        <Route exact path="/task/add" component={AddTask} />
        <Route exact path="/qrreader" component={QRcode} />
        <Route exact path="/createqr" component={CreateQR} />
      </Container>
      <BottomNav />
    </Router>
  );
}

export default App;