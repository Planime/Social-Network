import React, {useState, useEffect, useContext} from "react";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {useSelector, useDispatch} from "react-redux";
import {profileSelector} from "../../store/selectors";
import {editProfileAction} from "../../store/actions/profile";
// import Grid from '@mui/material/Grid';
// import { DropzoneArea } from 'material-ui-dropzone';
// import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';



const useStyles = makeStyles((theme) => ({
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


// const schema = yup.object().shape({
//     image: yup.array().required()
// });


export default function EditMyProfile() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const profile = useSelector(profileSelector);



    // const { control, handleSubmit, formState } = useForm<FormData>({
    //     resolver: yupResolver(schema),
    //     defaultValues: {}
    // });


    const [editPatientDataForm, setEditPatientDataForm] = useState({
        lastName: profile.lastName,
        firstName: profile.firstName,
        gender: profile.gender,
        aboutMe: profile.aboutMe,
        currentCity: profile.currentCity,
        avatar: profile.avatar,
        work: profile.work
    });

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
        dispatch(editProfileAction(editPatientDataForm))
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
