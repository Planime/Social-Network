import React, {useContext} from 'react';
import styles from './NotificationMessages.module.scss';
import {NotificationContext} from "../../context/notificationContext";
import Alert from '@mui/material/Alert';


const NotificationMessages = () => {

    const {notificationMessages, setNotificationMessages} = useContext(NotificationContext);


    return (
        <div
            className={styles.notificationMessagesAlert}
        >
            <Alert
                variant="filled"
                severity={notificationMessages.type}>
                {notificationMessages.text}
            </Alert>
        </div>
    );
};

export default NotificationMessages;
