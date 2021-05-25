import { ITEM_PRICE_INFO } from "../constants";

export const getOriginalPrice = ({
  itemPrices = ITEM_PRICE_INFO,
  itemName,
  quantity,
}) => {
  const itemPriceInfo = itemPrices[itemName];
  if (!itemPriceInfo) {
    return null;
  } else {
    return quantity * itemPriceInfo.price;
  }
};

export const getDiscountedPrice = ({
  itemName,
  quantity,
  itemPrices = ITEM_PRICE_INFO,
}) => {
  const itemPriceInfo = itemPrices[itemName];
  if (!itemPriceInfo) {
    return null;
  } else if (itemPriceInfo.sale && quantity >= itemPriceInfo.sale.quantity) {
    const saleInfo = itemPriceInfo.sale;
    const numSaleBundles = Math.floor(quantity / saleInfo.quantity);
    const numFullPricedItems = quantity % saleInfo.quantity;

    return (
      numSaleBundles * saleInfo.price + numFullPricedItems * itemPriceInfo.price
    );
  } else {
    return quantity * itemPriceInfo.price;
  }
};

export const { format: formatCurrencyValue } = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
