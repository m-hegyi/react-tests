import React from "react";
import renderer from "react-test-renderer";
import Button from "../../src/components/button";

it("Button changes class when hovered", () => {
  const component = renderer.create(<Button />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
