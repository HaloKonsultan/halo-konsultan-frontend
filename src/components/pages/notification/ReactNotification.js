import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactNotificationComponent = ({ title, body }) => {
    let hideNotif = title === "";

    if (!hideNotif) {
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
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
        />
    );
};

ReactNotificationComponent.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default ReactNotificationComponent;