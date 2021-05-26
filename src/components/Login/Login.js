import React, {useReducer, useEffect, useState} from 'react';
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
            passwordIsValid: null
        }
    );
    const {
        userName,
        userNameIsValid,
        password,
        passwordIsValid
    } = formState;

    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        console.log('checking validity');
        setFormIsValid(userNameIsValid && passwordIsValid);

        return () => {
            console.log('cleanup')
        }
    }, [userNameIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchForm({
            type: "USER_INPUT",
            payload: event.target.value
        });
    };

    const validateEmailHandler = () => {
        dispatchForm({
            type: 'INPUT_BLUR'
        });
    };

    const passwordChangeHandler = (event) => {
        dispatchForm({
            type: 'PASSWORD_INPUT',
            payload: event.target.value
        });
    };

    const validatePasswordHandler = () => {
        dispatchForm({
            type: 'PASSWORD_BLUR'
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(userName, password);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${userNameIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={userName}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;

