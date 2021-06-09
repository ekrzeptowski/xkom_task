import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main } from './features/reservation/Main';
import { SeatSelection } from './features/reservation/SeatSelection';
import { Summary } from './features/reservation/Summary';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reservation">
          <SeatSelection />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
