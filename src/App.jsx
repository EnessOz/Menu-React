import React, { useEffect, useState } from "react";
import menu from "./data";
import "./App.css";

const App = () => {
  const [data, setData] = useState(menu);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    filterData();
  }, [category]);

  const filterData = () => {
    const filteredData = category === "all" ? menu : menu.filter((item) => item.category === category);
    setData(filteredData);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="container">
      <h1 className="headerTitle">
        Our Menu
      </h1>
      <div className="btns">
        <button onClick={() => handleCategoryChange("all")}>All</button>
        <button onClick={() => handleCategoryChange("breakfast")}>Breakfast</button>
        <button onClick={() => handleCategoryChange("lunch")}>Lunch</button>
        <button onClick={() => handleCategoryChange("shakes")}>Shakes</button>
      </div>
      {data.map((item) => (
        // ...
        <div className="allDiv" key={item.id}>
          <img src={item.img} alt={item.title} />
          <div className="titlePrice">
            <div className="title">{item.title}</div>
            <div className="price">{item.price} $</div>
          </div>
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default App;