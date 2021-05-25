import React from "react";

function ItemInput({ setItemString }) {
  return (
    <form>
      <label htmlFor="items">
        Please enter all the items purchased separated by a comma
      </label>
      <input
        onChange={({ target: { value } }) => setItemString(value)}
        type="text"
        id="items"
        placeholder="milk,milk,bread..."
      />
    </form>
  );
}

export default ItemInput;
