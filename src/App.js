// import './App.css';
import Routes from "./components/routes/Routes";
import ReactNotification from "./components/pages/notification/ReactNotification";

import "./App.css";
import React, { useState } from "react";
import { onMessageListener } from "./Firebase";
import Notifications from "./components/pages/notification/Notifications";
import ReactNotificationComponent from "./components/pages/notification/ReactNotification";
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: "", body: "" });

    console.log(show, notification);

    onMessageListener()
        .then((payload) => {
            setShow(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });
            console.log(payload);
        })
        .catch((err) => console.log("failed: ", err));

  return (
      <div className="App">
          {show ? (
              <ReactNotificationComponent
                  title={notification.title}
                  body={notification.body}
              />
          ) : (
              <></>
          )}
          <Notifications />
          <Routes/>
      </div>
  );
}

export default App;
