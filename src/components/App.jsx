import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(title, content) {
    setItems((prevItems) => {
      event.preventDefault();
      return [...prevItems, { tit: title, cont: content }];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.tit}
          content={item.cont}
          deleteItem={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
