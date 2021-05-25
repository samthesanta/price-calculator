import React, { useState } from "react";
import "./App.css";
import { useGroceryList } from "./hooks";
import { Receipt, PriceTable, ItemInput } from "./components";

function App() {
  const [itemString, setItemString] = useState(null);

  const {
    purchasedItems,
    purchasedItemNames,
    originalTotal,
    discountedTotal,
  } = useGroceryList({ itemString });

  return (
    <div className="app">
      <h1>Price Calculator</h1>
      <PriceTable />
      <hr />
      <ItemInput setItemString={setItemString} />
      <Receipt
        purchasedItems={purchasedItems}
        purchasedItemNames={purchasedItemNames}
        originalTotal={originalTotal}
        discountedTotal={discountedTotal}
      />
    </div>
  );
}

export default App;
