// import './App.css';
import Routes from "./components/routes/Routes";
import ReactNotification from "./components/pages/notification/ReactNotification";

import "./App.css";
import React, { useState } from "react";
import { onMessageListener } from "./Firebase";
import Notifications from "./components/pages/notification/Notifications";
import ReactNotificationComponent from "./components/pages/notification/ReactNotification";

function App() {
  return (
      <div className="App">
          <Notifications />
          <Routes/>
      </div>
  );
}

export default App;
