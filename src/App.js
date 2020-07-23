import React from "react";
import "./styles.css";
import Button from "./components/button";
import Input from "./components/input";
import { validation } from "./utils/validation";

export default function App() {
  return (
    <div className="App">
      <Input
        label="User"
        placeholder="new user name"
        validation={validation({ asd: 12 })}
      />
      <Button title="Hello World" />
    </div>
  );
}
