import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Home from './component/Home';
import QRcode from './component/QRcode';

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/qrreader" component={QRcode} />
    </Router>
  );
}

export default App;