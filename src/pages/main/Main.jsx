import React, {useState, useEffect} from 'react';
import {Header, LeftNavBar} from "../../components";
import {NotificationMessages} from "../../pages";
import {NotificationContext} from "../../context/notificationContext";

import styles from './Main.module.scss';


const Main = () => {

    const [notificationMessages, setNotificationMessages] = useState({});
    const [isShowNotificationMessages, setIsShowNotificationMessages] = useState(false);

    useEffect(() => {
        if (notificationMessages.type) {
            setIsShowNotificationMessages(true);
            setTimeout(() => {
                setIsShowNotificationMessages(false)
            }, 4000)
        }

    }, [notificationMessages]);

    return (
        <NotificationContext.Provider value={{notificationMessages, setNotificationMessages}}>
            <Header/>
            <LeftNavBar/>
            {isShowNotificationMessages && <NotificationMessages/>}
        </NotificationContext.Provider>
    );
};

export default Main;
