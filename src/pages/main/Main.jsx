import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Header, LeftNavBar} from "../../components";
import {
    Authentication,
    NotificationMessages
} from "../../pages";
import {NotificationContext} from "../../context/notificationContext";
import {useCookies} from 'react-cookie';

import styles from './Main.module.scss';


const Main = () => {

    const [isLogIn, setIsLogIn] = useState(false);
    const [cookies, setCookie] = useCookies();

    console.log(cookies.token, "cookies")

    useLayoutEffect(() => {
        setIsLogIn(!!cookies.token);
    })

    return (
        <>
            {
                isLogIn ? <LeftNavBar/> : <Authentication/>
            }

        </>


    );
};

export default Main;
