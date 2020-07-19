import React from "react";
import Input from "./index";
import {
  themeDecorator,
  globalDecorators,
} from "../../../.storybook/decorators";

export default {
  title: "Input",
  component: Input,
  decorators: [themeDecorator, globalDecorators],
};

export const TextInput = () => <Input onChange={() => {}} name="" />;

TextInput.story = {
  name: "Text",
};

export const PasswordInput = () => (
  <Input onChange={() => {}} name="" type="password" />
);

PasswordInput.story = {
  name: "Password",
};
