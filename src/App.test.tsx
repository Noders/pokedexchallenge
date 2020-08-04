import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders `30 dias` de react", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/30 Dias/i);
  expect(linkElement).toBeInTheDocument();
});

test("Does not render a 404", () => {
  const { queryByText } = render(<App />);
  const linkElement = queryByText(/gatito/i);
  expect(linkElement).toBe(null);
});
