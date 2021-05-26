export const formReducer = (state, action) => {

    if(action.type === 'USER_INPUT') {
        return {
            userName: action.payload,
            userNameIsValid: action.payload.includes('@'),
            password: state.password,
            passwordIsValid: state.passwordIsValid
        }
    }
    if(action.type === 'INPUT_BLUR') {
        return {
            userName: state.userName,
            userNameIsValid: state.userName.includes('@'),
            password: state.password,
            passwordIsValid: state.passwordIsValid
        }
    }

    if(action.type === 'PASSWORD_INPUT') {
        return {
            userName: state.userName,
            userNameIsValid: state.userNameIsValid,
            password: action.payload,
            passwordIsValid: action.payload.trim().length > 6
        }
    }
    if(action.type === 'PASSWORD_BLUR') {
        return {
            userName: state.userName,
            userNameIsValid: state.userNameIsValid,
            password: state.password,
            passwordIsValid: state.password.trim().length > 6
        }
    }

    return {
        userName: '',
        userNameIsValid: false,
        password: '',
        passwordIsValid: false
    }
}