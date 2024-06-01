import React, { useState } from "react";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "password1",
    },
    {
      username: "user2",
      password: "password2",
    },
    {
      username: "user3",
      password: "password3",
    },
  ];

  const errors = {
    uname: "Invalid username",
    password: "Invalid password",
  };

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();

    const { uname, password } = event.target.elements; // get values from form inputs

    // check if user exists
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password</label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default Login;
