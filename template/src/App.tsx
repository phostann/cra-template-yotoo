import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { NoMatch } from './features/no-match';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Counter />
        </Route>
        <Route path="/sub">
          <Link to="/">
            <span>go home</span>
          </Link>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
