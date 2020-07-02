import { addDecorator, addParameters } from "@storybook/react";
import { themeDecorator, globalDecorators } from "./decorators";

const viewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      height: '1280px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      height: '480px',
    },
  },
};
addDecorator(globalDecorators);
addDecorator(themeDecorator);
addParameters({
  viewport: {
    viewports: viewports,
    defaultViewport: 'someDefault',
  },
});
