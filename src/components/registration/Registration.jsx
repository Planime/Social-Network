import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from 'formik-material-ui';
import {Button, LinearProgress, CircularProgress} from '@mui/material';
// import qaLogo from '../../../assets/images/qaLogo.jpeg';
import SendIcon from '@mui/icons-material/Send';
// import loginAPI from './login.api';
// import { encrypt } from '../../../helpers/crypto/crypto';
import {registrationApi} from "../../services/registration";


export default function Registration({setIsLogIn}) {


    // State
    const [isFetching, setIsFetching] = useState(false);

    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter email')
            .required('Please enter email'),
        lastName: Yup.string().required('Please last name'),
        firstName: Yup.string().required('Please first name'),
        confirmPassword: Yup.string().required('Please enter password'),
        password: Yup.string().required('Please enter password'),
    });

    const onSubmitHandler = async (body) => {

       const resp = await registrationApi(body);

        if (resp) {
            console.log("Hey I am here")
            setIsLogIn(true);
        }

    };

    return (
        <div style={{margin: '15px 0'}}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
                render={({onSubmitHandler, isSubmitting}) => (
                    <Form

                        className="formLoginPage"
                        noValidate>

                        <br/>
                        <br/>

                        <Field
                            type="text"
                            label="First Name"
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                        />

                        <br/>
                        <br/>

                        <Field
                            type="text"
                            label="Last Name"
                            name="lastName"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                        />

                        <br/>
                        <br/>

                        <Field
                            type="email"
                            label="Email"
                            name="email"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                        />

                        <br/>
                        <br/>

                        <Field
                            type="password"
                            label="Password"
                            name="password"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                        />

                        <br/>
                        <br/>

                        <Field
                            type="password"
                            label="Confirm Password"
                            name="confirmPassword"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                        />

                        <br/>
                        <br/>


                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            disabled={isFetching}
                            startIcon={isFetching && <CircularProgress/>}

                            endIcon={<SendIcon
                                color="primary"
                            >send</SendIcon>}
                        >
                            Register
                        </Button>

                        <br/>
                        <br/>

                        {isSubmitting && <LinearProgress/>}
                    </Form>
                )}
            />
        </div>
    );
}
