import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import { validation } from "../utils/validation";

const Login = ({ onLogin }) => {
  const [state, setState] = useState({
    user: "",
    pass: ""
  });

  const onSubmit = () => {};

  return (
    <div>
      <Input
        initValue={state.user}
        onChange={(val) => setState({ ...state, user: val })}
        label="Username"
        placeholder="Please provide your username"
        validation={validation({ minLength: 2, maxLength: 10 })}
      />
      <Input
        initValue={state.pass}
        onChange={(val) => setState({ ...state, pass: val })}
        label="Password"
        placeholder="Please provivde your password"
        validation={validation({ minLength: 4, maxLength: 6 })}
      />
      <Button onPress={onSubmit} title="Login" />
    </div>
  );
};

export default Login;
