import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from 'formik-material-ui';
import {Button, LinearProgress, CircularProgress} from '@mui/material';
// import qaLogo from '../../../assets/images/qaLogo.jpeg';
import SendIcon from '@mui/icons-material/Send';
// import loginAPI from './login.api';
// import { encrypt } from '../../../helpers/crypto/crypto';
import {loginApi} from "../../services/login";
import {getProfileAction} from "../../store/actions/profile";
import {signInAction} from "../../store/actions/session";
import {useDispatch} from "react-redux";


export default function Login() {

    const dispatch = useDispatch();

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

    const onSubmitHandler = async (body) => {
        dispatch(signInAction(body));
        dispatch(getProfileAction())
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
