import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Header, LeftNavBar} from "../../components";
import {
    Authentication,
    NotificationMessages
} from "../../pages";
import {NotificationContext} from "../../context/notificationContext";
import {useCookies} from 'react-cookie';
import {profileSelector} from "../../store/selectors";
import setLogin from "../../store/reducers/profile";


import styles from './Main.module.scss';


const Main = () => {
const profile = useSelector(profileSelector);
const dispatch = useDispatch();

    // console.log(cookies.token, "cookies")

    useLayoutEffect(() => {
        // setIsLogIn(!!cookies.token);
        if(localStorage.getItem("token")) {
            dispatch(setLogin())
        }
    });

    return (
        <>
            {
                profile.isLogin ? <LeftNavBar /> : <Authentication />
            }

        </>


    );
};

export default Main;
