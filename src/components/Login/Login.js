import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailInput = 'EMAIL_INPUT';
const emailBlur = 'EMAIL_BLUR';
const passwordInput = 'PASSWORD_INPUT';
const passwordBlur = 'PASSWORD_BLUR';

const initialState = {
  value: '',
  isValid: false,
};

const emailReducer = (state, action) => {
  switch (action.type) {
    case emailInput:
      return { value: action.val, isValid: action.val.includes('@') };

    case emailBlur:
      return { value: state.value, isValid: state.value.includes('@') };

    default:
      return initialState;
  }
};
const passwordReducer = (state, action) => {
  switch (action.type) {
    case passwordInput:
      return { value: action.val, isValid: action.val.length > 6 };

    case passwordBlur:
      return { value: state.value, isValid: state.value.length > 6 };

    default:
      return initialState;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialState
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifer = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifer);
      console.log('CLEANUP');
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ val: event.target.value, type: emailInput });
    // setFormIsValid(
    //   emailState.value.isValid && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ val: event.target.value, type: passwordInput });

    setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: emailBlur });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: passwordBlur });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id='email'
          label='E-Mail'
          type='email'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id='password'
          label='Password'
          type='password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
