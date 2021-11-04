import React, { useState, createContext } from "react";

export const ContextUser = createContext();

export const UserProvider = props => {

    const [ loginStatus, setLoginStatus ] = useState(false)

    return (
        <ContextUser.Provider value={{ loginStatus, setLoginStatus}}>
            {props.children}
        </ContextUser.Provider>
    );
};