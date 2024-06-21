import { useState } from "react";

const FilterComponent = () => {
  const numbers = [1, 2, 3, 4, 5];

  const [list, setList] = useState(numbers);

  const evenFilter = () => {
    let filteredList = list.filter((number) => number % 2 === 0);
    setList(filteredList);
  };

  const oddFilter = () => {
    let filteredList = list.filter((number) => number % 2 !== 0);
    setList(filteredList);
  };

  const reset = () => {
    setList(numbers);
  };

  const deleter = (deletedItem) => {
    let filteredList = list.filter((number) => number !== deletedItem);
    setList(filteredList);
  };

  return (
    <div>
      <h2>Example using filter in React</h2>
      <div>
        <button onClick={evenFilter}>Evens Only!</button>
        <button onClick={oddFilter}>Odds Only!</button>
        <button onClick={reset}>Reset!</button>
        {list.map((item, index) => (
          <>
            <p key={index}>{item}</p>
            <button onClick={() => deleter(item)}>Subtract Me!</button>
          </>
        ))}
      </div>
    </div>
  );
};
export default FilterComponent;
