import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';



function App() {
  const [items, setItems] = useState<Item[]>([]) 
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 2 },
  // ]

  const addItem = (product: string) => {
    console.log(product);
    setItems([...items, {id: v4(), product, quantity: 1 }])
  }
  return (
    <div className="App">
        <ShoppingList items={items} />
        <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
