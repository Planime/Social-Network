import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Login, Registration} from "../../components";
import styles from './Authentication.module.scss';


export default function Authentification({setIsLogIn}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className={styles.container}>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Login"/>
                <Tab label="Registration"/>
            </Tabs>
            {value ?
                <Registration setIsLogIn={setIsLogIn}/>
                :
                <Login setIsLogIn={setIsLogIn}/>}

        </div>

    );
}
