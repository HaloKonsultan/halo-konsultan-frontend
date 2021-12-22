import './App.css';
import Routes from "./components/routes/Routes";
import "./App.css";
import React, {useContext, useState} from "react";
import ReactNotificationComponent from "./components/pages/notification/ReactNotification";
import Notifications from "./components/pages/notification/Notifications";
import {onMessageListener} from "./Firebase";
import {ContextNotification} from "./components/context/ContextNotification";

function App() {
    const [show, setShow] = useState("");
    const [notification, setNotification] = useState({title: "", body: ""});

    onMessageListener()
        .then((payload) => {
            setShow(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });
            console.log(notification)
        })
        .catch((err) => console.log("failed: ", err));

    return (
        <div className="App">
            <Routes/>
            {show === true ? (
                <>
                    <ReactNotificationComponent
                        title={notification.title}
                        body={notification.body}
                    />
                </>

            ) : (
                <></>
            )}
            <Notifications/>
        </div>
    );
}

export default App;
