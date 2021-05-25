import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// reducer funkcija koja prihvata dva parametra
// prvi je zadnji state a drugi je akcija kojom se updatuje state
const emailReducer = (state, action) => {
  // samo ako je akcija tipa tog i tog
  if(action.type === 'USER_INPUT') {
    // updatuj mi state
    return {
      value: action.payload,
      isValid: action.payload.includes('@')
    }
  }
  // samo ako je akcija tipa tog i tog
  if(action.type === 'INPUT_BLUR') {
    // procitaj mi zadnji state i setuj ga kao value i proveri njegovu validnost prema tom zadnjem state-u
    // zato sto mi zelimo da zadrzimo zadnji state kako trenutni state na blur eventu u suprotnom se on gubi
    // probaj tako sto ces stativiti neki value kao tipa 'steva' => typuj nesto u input i onda bluruj..
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }
  // uvek mi vrati default objekat
  return { value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  // samo ako je akcija tipa tog i tog
  if(action.type === 'PASSWORD_INPUT') {
    // updatuj mi state
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 6
    }
  }
  // samo ako je akcija tipa tog i tog
  if(action.type === 'PASSWORD_BLUR') {
    // procitaj mi zadnji state i setuj ga kao value i proveri njegovu validnost prema tom zadnjem state-u
    // zato sto mi zelimo da zadrzimo zadnji state kako trenutni state na blur eventu u suprotnom se on gubi
    // probaj tako sto ces stativiti neki value kao tipa 'steva' => typuj nesto u input i onda bluruj..
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }
  // uvek mi vrati default objekat
  return {
    value: '',
    isValid: false
  }
}

// const formReducer = (state, action) => {
//   if(action.type === 'USER_INPUT') {
//     return {
//       userName: action.payload,
//       userNameIsValid: action.payload.includes('@'),
//       password: state.password,
//       passwordIsValid: state.passwordIsValid
//     }
//   }
//   if(action.type === 'INPUT_BLUR') {
//     return {
//       userName: state.userName,
//       userNameIsValid: state.userName.includes('@'),
//       password: state.password,
//       passwordIsValid: state.passwordIsValid
//     }
//   }
//
//   if(action.type === 'PASSWORD_INPUT') {
//     return {
//       userName: state.username,
//       userNameIsValid: state.userNameIsValid,
//       password: action.payload,
//       passwordIsValid: action.payload.trim().length > 6
//     }
//   }
//   if(action.type === 'PASSWORD_BLUR') {
//     return {
//       userName: state.userName,
//       userNameIsValid: state.userName.includes('@'),
//       password: state.password,
//       passwordIsValid: state.password.trim().length > 6
//     }
//   }
//
//   return {
//     userName: '',
//     userNameIsValid: false,
//     password: '',
//     passwordIsValid: false
//   }
// }

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  // const [formState, dispatchForm] = useReducer(formReducer, {userName: '', userNameIsValid: false, password: '', passwordIsValid: false})
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      payload: event.target.value
    });

    setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR'
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'PASSWORD_INPUT',
      payload: event.target.value
    });

    setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 6);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          {/*trazi . posle @ zato sto je type="email"*/}
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
