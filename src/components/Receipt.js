import React from "react";
import { formatCurrencyValue } from "../utils";

function Receipt({
  purchasedItems,
  purchasedItemNames,
  originalTotal,
  discountedTotal,
}) {
  return (
    <>
      {purchasedItemNames && purchasedItemNames.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItemNames.map((itemName) => {
              const purchasedItem = purchasedItems[itemName];
              return (
                <tr key={purchasedItem.title}>
                  <td>{purchasedItem.title}</td>
                  <td>{purchasedItem.quantity}</td>
                  <td>
                    {purchasedItem.price
                      ? formatCurrencyValue(purchasedItem.price)
                      : "N/A"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {originalTotal && (
        <div>
          <p>Total price : {formatCurrencyValue(discountedTotal)}</p>
          <p>
            You saved {formatCurrencyValue(originalTotal - discountedTotal)}{" "}
            today.
          </p>
        </div>
      )}
    </>
  );
}

export default Receipt;
