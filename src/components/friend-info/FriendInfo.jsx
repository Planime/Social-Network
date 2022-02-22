import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

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
    }
}));


export default function FriendInfo({id}) {
    const classes = useStyles();

    const [friendData, setFriendData] = useState({});

    useEffect(() => {
        fetch(`https://6165197809a29d0017c88f59.mockapi.io/friends/${id}`)
            .then((response)=> response.json())
            .then((response) => setFriendData(response))
    }, []);


    return (
        <React.Fragment>
            <div container>
                <img
                    className={classes.profileImage}
                    alt="Robert"
                    src={friendData.avatar}
                />
                <div className={classes.content}>
                    <Typography component="h1" variant="h4">
                        {friendData.firstName} {friendData.lastName}

                    </Typography>
                    <Button variant="outlined" color="primary" fullWidth>
                        Send Message
                    </Button>
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
                            {friendData.aboutMe}
                        </p>
                    </div>
                    <div className={classes.about}>
                        <Typography component="h3" variant="h6">
                            My Intro:
                        </Typography>
                        <p>Gender: {friendData.gender}</p>
                        <p>Current City: {friendData.city}, {friendData.state}</p>
                        <p>Work: {friendData.work}</p>
                        <p>Marital status: {friendData.maritalStatus || ""}
                        </p>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}
