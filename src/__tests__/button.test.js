import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/button";

it("Button changes class when hovered", () => {
  const component = renderer.create(<Button />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => tree.props.onMouseEnter());
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => tree.props.onMouseLeave());
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Render the proper title", () => {
  const component = renderer.create(<Button title="hello world" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


