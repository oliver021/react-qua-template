import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';

import './App.css';
import MasterLayout from './components/layout';

import LoginLayout from './components/layout/login';
import DashboardPage from './pages/dashboard';
import ConsolePage from './pages/console';
/**
 * @function App
 * @description The main component to this app
 */
function App() {
  return (
      <HashRouter>
        <Route path="/login">
          <LoginLayout>
          </LoginLayout>
        </Route>
        <Route path="/home/*">
          <MasterLayout>
            <Route to="/home/dashboassssssssrd" component={DashboardPage}/>
            {/* <Route to="/home/console" component={ConsolePage}/> */}
          </MasterLayout>
        </Route>
        <Route path="/" exact>
          <Redirect to="/home/" />
        </Route>
      </HashRouter>
  );
}

export default App;