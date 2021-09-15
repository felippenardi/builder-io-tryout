import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CatchAllPage from './CatchAllPage'
import Home from './Home'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={CatchAllPage} />
    </Switch>
  </Router>
);

export default App
