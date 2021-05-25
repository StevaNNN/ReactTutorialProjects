import React, {useReducer} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import {formReducer} from '../../reducers/reducers'

const Login = (props) => {

    const [formState, dispatchForm] = useReducer(
        formReducer, {
            userName: '',
            userNameIsValid: null,
            password: '',
            passwordIsValid: null,
            formValid: null
        }
    );

    console.log(formState);

    const emailChangeHandler = (event) => {
        dispatchForm({
            type: "USER_INPUT",
            payload: event.target.value
        });
        console.log("USERNAME ENTERED")
        dispatchForm({
            type: 'FORM_VALIDATION'
        });
    };

    const validateEmailHandler = () => {
        dispatchForm({
            type: 'INPUT_BLUR'
        });
        console.log("USERNAME BLURRED");
    };

    const passwordChangeHandler = (event) => {
        dispatchForm({
            type: 'PASSWORD_INPUT',
            payload: event.target.value
        });
        console.log("PASSWORD ENTERED");

        dispatchForm({
            type: 'FORM_VALIDATION'
        });
    };

    const validatePasswordHandler = () => {
        dispatchForm({
            type: 'PASSWORD_BLUR'
        });
        console.log("PASSWORD BLURRED");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(formState.userName, formState.password);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${formState.userNameIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    {/*trazi . posle @ zato sto je type="email"*/}
                    <input
                        type="email"
                        id="email"
                        value={formState.userName}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${formState.passwordIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formState.formValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;

