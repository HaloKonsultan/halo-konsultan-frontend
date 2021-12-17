import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextNotification = createContext()

export const NotificationProvider = props => {

    const pushNotification = (id, title, message) => {
        API.post(`consultants/notification/${id}`, {
                title: title,
                message : message
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                console.log("notifikasi", res)
            })
    }

    return (
        <ContextNotification.Provider value = {{
            pushNotification,
        }}>
            {props.children}
        </ContextNotification.Provider>
    )

}