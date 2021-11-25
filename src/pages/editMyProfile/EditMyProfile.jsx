import React, {useState, useEffect, useContext} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {NotificationContext} from "../../context/notificationContext";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
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


export default function EditMyProfile() {
    const classes = useStyles();
    const {setNotificationMessages} = useContext(NotificationContext);

    useEffect(() => {
        fetch(`https://6165197809a29d0017c88f59.mockapi.io/friends/1`)
            .then(res => res.json())
            .then(setEditPatientDataForm)
    }, []);

    const [editPatientDataForm, setEditPatientDataForm] = useState({});

    function onChangeFormHandler(e) {
        setEditPatientDataForm((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }

        })
    }

    function onSubmitForm(e) {
        e.preventDefault();
        fetch(`https://6165197809a29d0017c88f59.mockapi.io/friends/${editPatientDataForm.id}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editPatientDataForm)
            })
            .then(res => res.json())
            .then((res) => console.log(res))

            // .then(() => {
            //     setNotificationMessages({type: 'success', text: ' Where is my text'});
            // })
            // .catch(() => {
            //     setNotificationMessages({type: 'error', text: ' Where is my text'});
            // })
    }


    return (
        <React.Fragment>
            <form container
                  onSubmit={onSubmitForm}
            >
                <img
                    className={classes.profileImage}
                    alt="profile photo"
                    src={editPatientDataForm.avatar}
                />
                <div className={classes.content}>
                    <Typography component="h1" variant="h4">
                        {editPatientDataForm.lastName} {editPatientDataForm.firstName}
                    </Typography>
                    <p>Director</p>

                    <div className={classes.about}>
                        <Typography component="h3" variant="h6">
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value="About Me:"
                                disabled
                                SelectProps={{
                                    native: true,
                                }}
                            > ))
                            </TextField>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                name="aboutMe"
                                value={editPatientDataForm.aboutMe}
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            > ))
                            </TextField>

                        </Typography>

                    </div>
                    <div className={classes.about}>
                        <p>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value="Gender:"
                                disabled
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            > ))
                            </TextField>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                select
                                value={editPatientDataForm.gender}
                                name="gender"
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                ))
                            </TextField>
                        </p>
                        <p><TextField
                            id="outlined-basic"
                            variant="outlined"
                            value="Current City:"
                            disabled
                            onChange={onChangeFormHandler}
                            SelectProps={{
                                native: true,
                            }}
                        > ))
                        </TextField>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value={editPatientDataForm.currentCity}
                                name="currentCity"
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                ))
                            </TextField>
                        </p>
                        <p>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value="Work:"
                                disabled
                                SelectProps={{
                                    native: true,
                                }}
                            > ))
                            </TextField>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value={editPatientDataForm.work}
                                name="work"
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                ))
                            </TextField>
                        </p>
                        <p>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value="Marital Status:"
                                disabled
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            > ))
                            </TextField>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                select
                                name="maritalStatus"
                                value={editPatientDataForm.maritalStatus}
                                onChange={onChangeFormHandler}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value="male">Single</option>
                                <option value="female">Married</option>
                                <option value="other">Divorced</option>
                                ))
                            </TextField>
                        </p>
                    </div>
                </div>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth>
                    Save
                </Button>
            </form>
        </React.Fragment>
    );
}
