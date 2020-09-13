import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Home from './component/Home';
import QRcode from './component/QRcode';
import CreateQR from './component/CreateQR';

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/qrreader" component={QRcode} />
      <Route exact path="/createqr" component={CreateQR} />
    </Router>
  );
}

export default App;