import React, { useState } from "react";

const Calculation = (props) => {
  const { state, salesTax } = props;

  const [itemPrice, setItemPrice] = useState(0);

  const findPrice = (item) => {
    let taxAddedAmount = item * salesTax;
    setItemPrice(Number(item) + taxAddedAmount);
  };

  return (
    <>
      <input
        name="itemPrice"
        type="number"
        onChange={(e) => findPrice(e.target.value)}
      />
      <p>
        {state} price: ${itemPrice}
      </p>
    </>
  );
};

export default Calculation;
