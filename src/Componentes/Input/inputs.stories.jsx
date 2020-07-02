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

export const TextInput = () => <Input />;

TextInput.story = {
  name: "Texte",
};

export const PasswordInput = () => <Input type="password" />;

PasswordInput.story = {
  name: "Password",
};
