import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { GlobalProvider } from './context/GlobalState';
import BottomNav from './component/layout/BottomNav';

import Home from './component/Home';
import Login from './component/Login';
import MainTask from './component/tasks/MainTask';
import Tasks from './component/tasks/Tasks';
import Task from './component/tasks/Task';
import CreateTask from './component/tasks/create-task/Main';
import NewTask from './component/tasks/NewTask';
import WorkerTask from './component/tasks/WorkerTask';
import More from './component/More';
import Profile from './component/Profile';
import QRcode from './component/QRcode';
import CreateQR from './component/CreateQR';
import GLNs from './component/GLNs';

function App() {
  return (
    <GlobalProvider>
      <Router className="App">
        <Container className="main" maxWidth="sm">
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/task/main" component={MainTask} />
          <Route exact path="/task/newtask" component={NewTask} />
          <Route exact path="/task/workertask" component={WorkerTask} />
          <Route exact path="/task/tasks/:isCompleted" component={Tasks} />
          <Route exact path="/task/task/:taskid" component={Task} />
          <Route exact path="/task/add" component={CreateTask} />
          <Route exact path="/qrreader" component={QRcode} />
          <Route exact path="/createqr" component={CreateQR} />
          <Route exact path="/more" component={More} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/glns" component={GLNs} />
        </Container>
        <BottomNav />
      </Router>
    </GlobalProvider>
  );
}

export default App;