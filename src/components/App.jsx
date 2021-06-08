import React, { useState } from "react";

function App() {
  const [itemsArray, addNewItem] = useState([]);
  var newItem;
  function addItem(event) {
    newItem = event.target.value;
  }

  function addToArray() {
    addNewItem((prevArray) => [...prevArray, newItem]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={addItem} />
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map((item) => (
            <li> {item} </li>
          ))}
          {/* <li>A Item </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
