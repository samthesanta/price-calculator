import { fireEvent, render } from "@testing-library/react";
import ItemInput from "./ItemInput";

test("renders ItemInput", () => {
  const { getByText } = render(<ItemInput setItemString={null} />);
  expect(
    getByText("Please enter all the items purchased separated by a comma")
  ).toBeTruthy();
});

test("calls setItemString", () => {
  const setItemString = jest.fn();
  const { getByLabelText } = render(
    <ItemInput setItemString={setItemString} />
  );
  const input = getByLabelText(
    "Please enter all the items purchased separated by a comma"
  );

  fireEvent.change(input, { target: { value: "milk,milk" } });

  expect(setItemString).toHaveBeenCalledWith("milk,milk");
});
