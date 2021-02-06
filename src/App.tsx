import React from 'react';
import './App.css';
import AppRoutes from './routes';
import MasterLayout from './components/layout';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import LoginLayout from './components/layout/login';

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
        <Route path="/home/**">
          <MasterLayout>
            <AppRoutes/>
          </MasterLayout>
        </Route>
        <Route path="/" exact>
          <Redirect to="/home/" />
        </Route>
      </HashRouter>
  );
}

export default App;