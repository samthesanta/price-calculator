import { getOriginalPrice, getDiscountedPrice, formatCurrencyValue } from ".";

test("getOriginalPrice", () => {
  const result = getOriginalPrice({ itemName: "milk", quantity: 2 });
  expect(result).toEqual(7.94);
});

test("getDiscountedPrice", () => {
  const result = getDiscountedPrice({ itemName: "milk", quantity: 2 });
  expect(result).toEqual(5);
});

test("formatCurrencyValue", () => {
  const result = formatCurrencyValue(5)
  expect(result).toEqual('$5.00');
});
