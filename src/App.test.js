import { render } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  const { getByText } = render(<App />);
  expect(getByText("Price Calculator")).toBeTruthy();
});
