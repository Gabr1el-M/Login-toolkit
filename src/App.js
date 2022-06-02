import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Wallet from './pages/wallet';

function App() {
  return (
    <div>
      
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
    </div>
  );
}

export default App;