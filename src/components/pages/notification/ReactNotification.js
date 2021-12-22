import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
import {notification} from 'antd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ContextNotification} from "../../context/ContextNotification";

const ReactNotificationComponent = ({ title, body }) => {
    let hideNotif = title === "";

    if (!hideNotif) {
        console.log("panggil")
        toast.info(<Display />);
    }

    function Display() {
        return (
            <div>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        );
    }

    return (
        <ToastContainer
            autoClose={3000}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            limit={1}
        />
    );
};

ReactNotificationComponent.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default ReactNotificationComponent;