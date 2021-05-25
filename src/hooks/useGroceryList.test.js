import { renderHook } from "@testing-library/react-hooks";
import { useGroceryList } from "./useGroceryList";

test("calculates", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useGroceryList({ itemString: "milk" })
  );

  expect(result.current.purchasedItems).toEqual({
    milk: { originalPrice: 3.97, price: 3.97, quantity: 1, title: "Milk" },
  });

  expect(result.current.purchasedItemNames).toEqual(["milk"]);
  expect(result.current.originalTotal).toEqual(3.97);
  expect(result.current.discountedTotal).toEqual(3.97);
});

test("calculates sales", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useGroceryList({ itemString: "milk, milk" })
  );

  expect(result.current.purchasedItems).toEqual({
    milk: { originalPrice: 7.94, price: 5, quantity: 2, title: "Milk" },
  });

  expect(result.current.purchasedItemNames).toEqual(["milk"]);
  expect(result.current.originalTotal).toEqual(7.94);
  expect(result.current.discountedTotal).toEqual(5);
});

test("calculates non-existant items", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useGroceryList({ itemString: "doesnotexist" })
  );

  expect(result.current.purchasedItems).toEqual({
    doesnotexist: {
      originalPrice: null,
      price: null,
      quantity: 1,
      title: "doesnotexist",
    },
  });

  expect(result.current.purchasedItemNames).toEqual(["doesnotexist"]);
  expect(result.current.originalTotal).toEqual(0);
  expect(result.current.discountedTotal).toEqual(0);
});
