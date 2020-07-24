import React from "react";
import renderer, { act } from "react-test-renderer";
import Input from "../components/input";
import { validation } from "../utils/validation";

it("Input render correctly", () => {
  const component = renderer.create(<Input />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Input works correctly", () => {
  const onChange = jest.fn();
  const component = renderer.create(
    <Input onChange={onChange} initValue="hello" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  let testInstance = component.root;
  expect(testInstance.findByType("input").props.value).toBe("hello");

  act(() =>
    component.root
      .findByType("input")
      .props.onChange({ target: { value: "béla" } })
  );

  expect(testInstance.findByType("input").props.value).toBe("béla");
});

it("Input works correctly with validation", () => {
  const onChange = jest.fn();
  const component = renderer.create(
    <Input
      onChange={onChange}
      initValue=""
      validation={validation({ minLength: 2, maxLength: 5 })}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() =>
    component.root
      .findByType("input")
      .props.onChange({ target: { value: "A" } })
  );

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(component.root.findByProps({ className: "error" }).children).toEqual([
    "Error!"
  ]);

  act(() =>
    component.root
      .findByType("input")
      .props.onChange({ target: { value: "As" } })
  );

  expect(component.toJSON()).toMatchSnapshot();

  act(() => {
    component.root
      .findByType("input")
      .props.onChange({ target: { value: "Asdefg" } });
  });

  expect(component.toJSON).toMatchSnapshot();

  expect(component.root.findByProps({ className: "error" }).children).toEqual([
    "Error!"
  ]);
});
