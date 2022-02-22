import React, {useState, useEffect} from "react";
import makeStyles from '@mui/styles/makeStyles';
import {Link, useRouteMatch} from "react-router-dom";
import {FriendInfo} from "../../components"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import styles from './MyFriends.module.scss';


const MyFriends = () => {

    const [friends, setFriends] = useState([]);
    const match = useRouteMatch();

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

    return (
        <>
            <div>
                <h3 className="heading">My Friends</h3>

                {friends.map(friend => {
                    return (
                        <div
                            id={friend.id}
                            className="card_wrap">
                            <Link to={`friends/${friend.id}`}>
                                <Avatar alt="Avatar"
                                        src={friend.avatar} className={''}/>
                                <h5>{friend.lastName} {friend.firstName}</h5>
                            </Link>
                        </div>
                    )
                })}


            </div>
        </>


    );
};

export default MyFriends;
