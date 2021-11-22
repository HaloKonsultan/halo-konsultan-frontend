import React, { useState, useEffect } from "react";
import { getToken } from "../../../Firebase";

const Notifications = (props) => {
    const [isTokenFound, setTokenFound] = useState(false);
    const [input, setInput] = useState([]);

    console.log("Token found", isTokenFound);

    // To load once
    useEffect(() => {
        let data;

        async function tokenFunc() {
            data = await getToken(setTokenFound);
            if (data) {
                console.log("Token is", data);
            }
            return data;
        }

        tokenFunc();
    }, []);

    return <></>;
};

Notifications.propTypes = {};

export default Notifications;