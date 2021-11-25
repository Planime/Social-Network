import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from 'formik-material-ui';
import {Button, LinearProgress, CircularProgress} from '@material-ui/core';
// import qaLogo from '../../../assets/images/qaLogo.jpeg';
import SendIcon from '@material-ui/icons/Send';
// import loginAPI from './login.api';
// import { encrypt } from '../../../helpers/crypto/crypto';


export default function Login() {


    // State
    const [isFetching, setIsFetching] = useState(false);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter email')
            .required('Please enter email'),
        password: Yup.string().required('Please enter password'),
    });

    const onSubmitHandler = async () => {
        console.log("onSubmitHandler")

        // try {
        //
        //     setIsFetching(true);
        //     const { email, password } = values;
        //     let responseServer = await loginAPI(email, password);
        //
        //     responseServer = await JSON.parse(responseServer)
        //     responseServer = await JSON.parse(responseServer)
        //
        //     sessionStorage.setItem('authToken', encrypt(responseServer.authToken, secret));
        //     sessionStorage.setItem('injectorLogin', encrypt(responseServer.injectorLogin, secret));
        //     sessionStorage.setItem('injectorApiPass', encrypt(responseServer.injectorApiPass, secret));
        //     sessionStorage.setItem('isAdminUser', encrypt(responseServer.isAdminUser, secret));
        //
        //     setAuthToken(responseServer.authToken);
        //     setIsFetching(false);
        //
        //
        // } catch (error) {
        //     setModalMessage({
        //         msg: 'Invalid login and/or password',
        //         status: 404,
        //     });
        //
        //
        //     setOpen(true);
        //     setSubmitting(false);
        //     setIsFetching(false);
        //
        // }

    };

    // const [open, setOpen] = React.useState(false);
    // const handleClose = () => setOpen(false);

    return (
        <div style={{margin: '150px'}}>
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
                            Login
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
