import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import ShoppingList from "./components"


function App() {
  const itemList = useSelector((state) => {
    return state;
  });
  

  return (
    <div className="App">
      <ShoppingList itemList={itemList} />
    </div>
  );
}

export default App;




