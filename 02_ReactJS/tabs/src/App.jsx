import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const items = [
    {
      label: "Tab 1",
      content:
        "Tab 1 will contain information regarding Stat requirements for weilding the Weapons and Armor.",
    },
    {
      label: "Tab 2",
      content:
        "Tab 2 will contain the recommended Flask distribution as well as a recipe for your Wondrous Physick.",
    },
    {
      label: "Tab 3",
      content:
        "Tab 3 will contain strategies for defeating bosses, enemies and detailed information such as Runes, item drops, etc.",
    },
  ];
  return (
    <div className="App">
      <h1>Tabs</h1>
      <Tabs items={items} />
    </div>
  );
}

export default App;
