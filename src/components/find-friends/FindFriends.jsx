import React, {useState, useEffect} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {FriendInfo} from "../../components";
import {getAllProfilesApi} from "../../services/profile";

import Avatar from '@mui/material/Avatar';

import styles from './FindFriends.module.scss';



const FindFriends = () => {

    const [friends, setFriends] = useState([]);
    const match = useRouteMatch();

    useEffect(() => {
        (async () => {
            const res = await getAllProfilesApi();
            setFriends(res.data)
        })()


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

export default FindFriends;
