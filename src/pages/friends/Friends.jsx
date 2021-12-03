import React, {useState, useEffect} from "react";
import makeStyles from '@mui/styles/makeStyles';
import {Link, useRouteMatch} from "react-router-dom";
import {FriendInfo} from "../../components"
import contacts from "./contacs"
import Avatar from '@mui/material/Avatar';


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
    const match = useRouteMatch();
    console.log(match)

    const [friends, setFriends] = useState([]);


    useEffect(() => {
        fetch("https://6165197809a29d0017c88f59.mockapi.io/friends")
            .then(res => res.json())
            .then(setFriends);
    }, []);


    if (match.isExact && match.params.id) {
        return (
            <FriendInfo
                id={match.params.id}
            />
        )

    }
    else {
        return (
            <React.Fragment>
                <div>
                    <h3 className="heading">My Friends</h3>

                    {friends.map(friend => {
                        return (
                            <div
                                id={friend.id}
                                className="card_wrap">
                                <Link to={`friends/${friend.id}`}>
                                    <Avatar alt="Avatar"
                                            src={friend.avatar} className={classes.large}/>
                                    <h5>{friend.lastName} {friend.firstName}</h5>
                                </Link>
                            </div>
                        )
                    })}


                </div>
            </React.Fragment>
        );
    }
}
