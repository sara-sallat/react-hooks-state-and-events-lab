import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [items] = useState(itemData);
  const [isDark, setIsDark] = useState(false);

  const darkModeHandler = () => {
    setIsDark((previousValue) => !previousValue);
  };
  let appClass;

  if(isDark === true){
    appClass = "App dark"
  }else{
    appClass = "App light"
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeHandler}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
