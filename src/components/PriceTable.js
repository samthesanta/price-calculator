import React from "react";
import { ITEM_PRICE_INFO, ITEM_NAMES } from "../constants";
import { formatCurrencyValue } from "../utils";

function PriceTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Unit Price</th>
          <th>Sale Price</th>
        </tr>
      </thead>
      <tbody>
        {ITEM_NAMES.map((itemName) => {
          const item = ITEM_PRICE_INFO[itemName];
          return (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{formatCurrencyValue(item.price)}</td>
              <td>
                {item.sale
                  ? `${item.sale.quantity} for ${formatCurrencyValue(
                      item.sale.price
                    )}`
                  : ""}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PriceTable;
