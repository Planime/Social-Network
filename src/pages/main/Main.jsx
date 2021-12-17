import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Header, LeftNavBar} from "../../components";
import {
    Authentication,
    NotificationMessages
} from "../../pages";
import {NotificationContext} from "../../context/notificationContext";
import {useCookies} from 'react-cookie';
import {sessionSelector} from "../../store/selectors";
import {setIsLogin} from "../../store/reducers/session";


import styles from './Main.module.scss';
import {getProfileAction} from "../../store/actions/profile";


const Main = () => {
const session = useSelector(sessionSelector);
const dispatch = useDispatch();

    // console.log(cookies.token, "cookies")

    useLayoutEffect(() => {
        // setIsLogIn(!!cookies.token);
        if(localStorage.getItem("token")) {
            dispatch(setIsLogin());
            dispatch(getProfileAction())

        }
    });

    return (
        <>
            {
                session.isLogin ? <LeftNavBar /> : <Authentication />
            }

        </>


    );
};

export default Main;
