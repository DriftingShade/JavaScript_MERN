import { useState } from "react";

const Tabs = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-headers">
        {items.map((item, index) => (
          <button
            key={index}
            className={index === selectedTab ? "active" : ""}
            onClick={() => setSelectedTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{items[selectedTab].content}</div>
    </div>
  );
};

export default Tabs;
