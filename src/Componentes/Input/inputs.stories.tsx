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

export const TextInput = () => <Input onChange={() => {}} name="" label="" />;

TextInput.story = {
  name: "Text",
};

export const PasswordInput = () => (
  <Input onChange={() => {}} name="" type="password" label="" />
);

PasswordInput.story = {
  name: "Password",
};
