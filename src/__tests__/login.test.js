import React from "react";
import renderer, { act } from "react-test-renderer";
import Login from "../components/login";

it("Render the login form correctly", () => {
  const component = renderer.create(<Login />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Submit login form with valid data", () => {
  const component = renderer.create(<Login />);
});
