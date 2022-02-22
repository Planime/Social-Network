import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import {profileSelector} from "../../store/selectors";
import {DropzoneArea} from 'material-ui-dropzone';
// import {useForm, Controller} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
import {toast} from "react-toastify";
import {uploadAvatarProfileAction} from "../../store/actions/profile";

const useStyles = makeStyles(() => ({
    avatar: {},
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


export default function Profile() {
    const classes = useStyles();
    const profile = useSelector(profileSelector);
    const [file, setFiles] = useState(null);
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('avatar', file);

        dispatch(uploadAvatarProfileAction(formData))
    }

    const onChangeHandler = (e) => {
        const files = e.target.files;

        if (!!files?.length) {
            if (files[0].size > 1000000) {
                toast.error('invalid file size');
                return
            }

            setFiles(files[0])
        }
    }

    return (
        <React.Fragment>


            <div container>
                <img
                    className={classes.profileImage}
                    alt="avatar"
                    src={profile.avatar}
                />


                {/*Upload button*/}
                <form
                    onSubmit={onSubmit}
                    noValidate>

                    <input
                        type="file"
                        onChange={onChangeHandler}
                        accept={'.jpg,.png,.gif,.jpeg'}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!file}
                    >
                        Upload photo
                    </Button>
                </form>


                <div className={classes.content}>
                    <Typography component="h1" variant="h4">
                        {profile.lastName} {profile.firstName}
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
                            {profile.aboutMe}
                        </p>
                    </div>
                    <div className={classes.about}>
                        <Typography component="h3" variant="h6">
                            My Intro:
                        </Typography>
                        <p>Gender: {profile.gender}
                        </p>
                        <p>Current City: {profile.currentCity}
                        </p>
                        <p>Work: {profile.work}
                        </p>
                        <p>Marital status: {profile.maritalStatus}
                        </p>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}
