import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

const useStyles = makeStyles((theme) => ({
    avatar: {
    },
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
    }
}));


function editProfile() {
    console.log("edit profile")
}


export default function Profile() {
    const classes = useStyles();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("https://6165197809a29d0017c88f59.mockapi.io/friends/1")
            .then(res => res.json())
            .then(setUser);
    }, []);


    return (
        <React.Fragment>
            <div container>
                <img
                    className={classes.profileImage}
                    alt="Robert"
                    src={user.avatar}
                />
                <div className={classes.content}>
                    <Typography component="h1" variant="h4">
                        {user.lastName} {user.firstName}
                    </Typography>
                    <p>Director</p>
                    <Link to="/profile/edit">
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth>
                            Edit Profile
                        </Button>
                    </Link>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <p>Friends</p>
                        </Grid>
                        <Grid item>
                            <p>12870</p>
                        </Grid>
                    </Grid>
                    <div className={classes.about}>
                        <Typography component="h3" variant="h6">
                            About Me:
                        </Typography>
                        <p>
                            {user.aboutMe}
                        </p>
                    </div>
                    <div className={classes.about}>
                        <Typography component="h3" variant="h6">
                            My Intro:
                        </Typography>
                        <p>Gender: Male
                        </p>
                        <p>Current City: Sacramento city
                        </p>
                        <p>Work: Software engineer at SMUD
                        </p>
                        <p>Marital status: Married
                        </p>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}
