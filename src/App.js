import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Container } from '@material-ui/core';

import BottomNav from './component/layout/BottomNav';

import Home from './component/Home';
import Warehouses from './component/Warehouses';
import AddWarehouse from './component/AddWarehouse';
import QRcode from './component/QRcode';
import CreateQR from './component/CreateQR';

function App() {
  return (
    <Router className="App">
      <Container className="main" maxWidth="sm">
        <Route exact path="/" component={Home} />
        <Route exact path="/warehouses" component={Warehouses} />
        <Route exact path="/addwarehouses" component={AddWarehouse} />
        <Route exact path="/qrreader" component={QRcode} />
        <Route exact path="/createqr" component={CreateQR} />
      </Container>
      <BottomNav />
    </Router>
  );
}

export default App;