import React, {useState, useEffect} from "react";
import makeStyles from '@mui/styles/makeStyles';
import {Link, useRouteMatch} from "react-router-dom";
import {FriendInfo, MyFriends, FindFriends} from "../../components"
import Box from '@mui/material/Box';
import contacts from "./contacs"
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const useStyles = makeStyles(() => ({
    // avatar: {
    //     margin: theme.spacing(1),
    //     backgroundColor: theme.palette.secondary.main
    // },
    profileImage: {
        width: "20%",
        borderRadius: "100%"
    },
    content: {
        justifyContent: "left",
        textAlign: "left"
    },
    details: {
        marginTop: "-20px"
    },
    chip: {
        padding: "0 5px",
        margin: "2px 5px"
    },
    about: {
        margin: "10px 0",
        alignItems: "left",
        textAlign: "left"
    },
    card: {
        maxWidth: 1,
        width: "10px",
        height: "10px"
    },
    table: {
        minWidth: 650,
    },
    large: {
        // width: theme.spacing(10),
        // height: theme.spacing(10),
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}


export default function Friends() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



        return (

            <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="My Friends"/>
                    <Tab label="Find Friends"/>
                </Tabs>

                {
                    value === 0 && <MyFriends/>
                }

                {
                    value === 1 && <FindFriends/>
                }

            </Box>

        );

}
