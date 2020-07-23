import React from "react";
import renderer from "react-test-renderer";
import Input from "../components/input";

it("Input render correctly", () => {
  const component = renderer.create(<Input />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
