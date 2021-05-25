
import { useState, useEffect } from "react";
import { ITEM_PRICE_INFO } from "../constants";
import { getOriginalPrice, getDiscountedPrice } from "../utils";

export function useGroceryList({ itemString }) {
  const [purchasedItems, setPurchasedItems] = useState({});
  const [purchasedItemNames, setPurchasedItemNames] = useState([]);
  const [originalTotal, setOriginalTotal] = useState(null);
  const [discountedTotal, setDiscountedTotal] = useState(null);

  useEffect(() => {
    if (!itemString) {
      return;
    }
    const itemsAsList = itemString.split(",");
    const nextPurchasedItems = {};
    itemsAsList.forEach((enteredName) => {
      const trimmedName = enteredName.trim();
      const lowerCaseName = trimmedName.toLowerCase();
      if (trimmedName.length === 0) {
        return;
      }
      const currentValue = nextPurchasedItems[lowerCaseName];

      let nextQuantity;
      if (currentValue) {
        nextQuantity = currentValue.quantity + 1;
      } else {
        nextQuantity = 1;
      }

      const nextDiscountedPrice = getDiscountedPrice({
        itemName: lowerCaseName,
        quantity: nextQuantity,
      });

      const nextOriginalPrice = getOriginalPrice({
        itemName: lowerCaseName,
        quantity: nextQuantity,
      });

      const nextValue = {
        ...currentValue,
        title: ITEM_PRICE_INFO[lowerCaseName]
          ? ITEM_PRICE_INFO[lowerCaseName].title
          : trimmedName,
        quantity: nextQuantity,
        price: nextDiscountedPrice,
        originalPrice: nextOriginalPrice,
      };

      nextPurchasedItems[lowerCaseName] = nextValue;
    });

    // cache the keys as an iterable array
    const nextPurchasedItemNames = Object.keys(nextPurchasedItems);
    let nextOriginalTotal = 0;
    let nextDiscountedTotal = 0;
    nextPurchasedItemNames.forEach((itemName) => {
      const item = nextPurchasedItems[itemName];
      nextDiscountedTotal += item.price;
      nextOriginalTotal += item.originalPrice;
    });

    setOriginalTotal(nextOriginalTotal);
    setDiscountedTotal(nextDiscountedTotal);
    setPurchasedItemNames(nextPurchasedItemNames);
    setPurchasedItems(nextPurchasedItems);
  }, [itemString]);

  return { purchasedItems, purchasedItemNames, originalTotal, discountedTotal };
}
