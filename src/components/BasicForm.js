import React from "react";

import useBasicInput from "../hooks/use-basic-input";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const BasicForm = (props) => {
  const {
    value: fNameInputValue,
    isValid: fNameInputValid,
    isError: fNameInputIsError,
    inputHandler: fNameInputHandler,
    blurHandler: fNameInputBlurHandler,
    reset: fNameInputReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: lNameInputValue,
    isValid: lNameInputValid,
    isError: lNameInputIsError,
    inputHandler: lNameInputHandler,
    blurHandler: lNameInputBlurHandler,
    reset: lNameInputReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValid: emailInputValid,
    isError: emailIsError,
    inputHandler: emailInputHandler,
    blurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useBasicInput((value) => validateEmail(value));

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!fNameInputValid && !lNameInputValid && !emailInputValid) {
      return;
    }
    console.log(fNameInputValue);
    console.log(lNameInputValue);
    console.log(emailInputValue);

    fNameInputReset();
    lNameInputReset();
    emailInputReset();
  };

  let formIsValid = false;
  if (fNameInputValid && lNameInputValid && emailInputValid) {
    formIsValid = true;
  }

  const fnameInputClass = fNameInputIsError
    ? "form-control invalid"
    : "form-control";

  const lnameInputClass = lNameInputIsError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailIsError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmit}>
      <div className="control-group">
        <div className={fnameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameInputHandler}
            onBlur={fNameInputBlurHandler}
            value={fNameInputValue}
          />
          {fNameInputIsError && <p>First Name should not be empty</p>}
        </div>
        <div className={lnameInputClass}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lNameInputHandler}
            onBlur={lNameInputBlurHandler}
            value={lNameInputValue}
          />
          {lNameInputIsError && <p>Last Name should not be empty</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={emailInputValue}
        />
        {emailIsError && <p>Enter valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
