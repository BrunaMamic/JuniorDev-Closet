/* eslint-disable @typescript-eslint/no-explicit-any */
import "./FilterCloset.css";
import { useState } from "react";

const FilterCloset = (props: any) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const handleClearFilter = () => {
    setSelectedType("");
    setSelectedSize("");
    setSelectedCondition("");
    props.onFilter("", "", "");
  };

  const handleTypeClick = (type: any) => {
    setSelectedType(type);
    props.onFilter(type, selectedSize, selectedCondition);
  };

  const handleSizeClick = (size: any) => {
    setSelectedSize(size);
    props.onFilter(selectedType, size, selectedCondition);
  };

  const handleConditionClick = (condition: any) => {
    setSelectedCondition(condition);
    props.onFilter(selectedType, selectedSize, condition);
  };

  const types = ["Shirt", "Jeans", "Dress", "Accessories", "Skirt", "Jacket"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const conditions = ["New", "Used"];

  return (
    <div className="filter-container">
      <div style={{ margin: "0 15px 15px 0" }}>
        <div className="filterType">
          <h2 style={{ color: "#644732" }}>Filter by type:</h2>
          <div className="button-container">
            <button onClick={handleClearFilter} className="filterButton">
              Clear Filter
            </button>
            {types.map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  if(type === selectedType){
                    handleTypeClick("");

                  } else {
                    handleTypeClick(type)
                  }
                }}
                className={
                  selectedType === type ? "filterButton active" : "filterButton"
                }>
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ margin: "0 15px 15px 0" }}>
        <div className="filterSize">
          <h2 style={{ color: "#644732" }}>Filter by size:</h2>
          <div className="button-container">
            <button onClick={handleClearFilter} className="filterButton">
              Clear Filter
            </button>
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => {
                  if (size === selectedSize) {
                    handleSizeClick("");
                  } else {
                    handleSizeClick(size);
                  }
                }}
                className={
                  selectedSize === size ? "filterButton active" : "filterButton"
                }>
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ margin: "0 15px 15px 0" }}>
        <div className="filterCondition">
          <h2 style={{ color: "#644732" }}>Filter by condition:</h2>
          <div className="button-container">
            <button onClick={handleClearFilter} className="filterButton">
              Clear Filter
            </button>
            {conditions.map((condition, index) => (
              <button
                key={index}
                className={
                  selectedCondition === condition
                    ? "filterButton active"
                    : "filterButton"
                }
                onClick={() => {
                  if (condition === selectedCondition) {
                    handleConditionClick("");
                  } else handleConditionClick(condition);
                }}>
                {condition}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCloset;
