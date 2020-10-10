import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'react-notifications/lib/notifications.css'

import Router from './router';
import {NotificationContainer} from 'react-notifications';

function App() {
  return (
    <>
      <NotificationContainer />
      <Router />
    </>
  );
}

export default App;
