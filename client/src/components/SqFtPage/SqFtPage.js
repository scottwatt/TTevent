import React, { useState, useEffect } from 'react';
import './SqFtPage.css'; 

const categories = {
    'Guest Seating': [
      { name: '36" Round Table with 4 Chairs', sqFtEach: 27 },
      { name: '48" Round Table with 6 Chairs', sqFtEach: 82 },
      { name: '60" Round Table with 8 Chairs', sqFtEach: 100 },
      { name: '72" Round Table with 12 Chairs', sqFtEach: 144 },
      { name: '48" Square Table with 6 Chairs', sqFtEach: 100 },
      { name: '60" Square Table with 8 Chairs', sqFtEach: 122 },
      { name: `6' X 30" Table with 8 Chairs`, sqFtEach: 80 },
      { name: `8' X 30" Table with 10 Chairs`, sqFtEach: 90 },
    ],
    'Chairs Only': [
      { name: 'Any Chair Selection', sqFtEach: 6 },
    ],
    'Tables Only': [
        { name: 'Cocktail Table, Standing', sqFtEach: 64 },
        { name: `8' Table`, sqFtEach: 100 },
        { name: `6' Table`, sqFtEach: 80 },
        { name: 'Large Serpentine Table', sqFtEach: 100 },
        { name: '36" Round Table	', sqFtEach: 50 },
        { name: '48" Round Table	', sqFtEach: 70 },
        { name: '60" Round Table', sqFtEach: 80 },
    ],
    'Dancefloor': [
        { name: `3' X 4' Dancefloor`, sqFtEach: 15 },
        { name: `9' X 12' Dancefloor`, sqFtEach: 154 },
        { name: `12' X 12' Dancefloor`, sqFtEach: 196 },
        { name: `12' X 15' Dancefloor`, sqFtEach: 238 },
        { name: `15' X 18' Dancefloor`, sqFtEach: 340 },
        { name: `18' X 20' Dancefloor`, sqFtEach: 460 },
        { name: `20' X 21' Dancefloor`, sqFtEach: 506 },
        { name: `24' X 24' Dancefloor`, sqFtEach: 676 },
    ],
  };
  
// const items = [
//   { name: 'Any Chair Selection', sqFtEach: 6 },
// //   { name: '60" Round Table with 8 Chairs', sqFtEach: 100 },

// ];

const SquareFootageCalculator = () => {
  const allItems = Object.values(categories).flat();
  const [quantities, setQuantities] = useState(Array(allItems.length).fill(0));
  const [totalSqFt, setTotalSqFt] = useState(0);
  const [openCategory, setOpenCategory] = useState(null);

  const handleQuantityChange = (index, value) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = value;
    setQuantities(updatedQuantities);
  };

  const incrementQuantity = (index) => {
      handleQuantityChange(index, quantities[index] + 1);
  };

  const decrementQuantity = (index) => {
      handleQuantityChange(index, Math.max(0, quantities[index] - 1));
  };

  const toggleCategory = (category) => {
      if (openCategory === category) {
          setOpenCategory(null);
      } else {
          setOpenCategory(category);
      }
  };

  useEffect(() => {
    const total = quantities.reduce((acc, qty, idx) => {
      return acc + (qty * allItems[idx].sqFtEach);
    }, 0);
    setTotalSqFt(total);
  }, [quantities, allItems]);

  return (
    <div className="calculator-container">
        {Object.keys(categories).map((category) => (
            <div key={category} className="category-section">
                <h2 className="category-title" onClick={() => toggleCategory(category)}>
                    {category}
                </h2>
                {openCategory === category && categories[category].map((item, index) => {
                    const globalIndex = allItems.indexOf(item);
                    return (
                        <div key={index} className="item-row">
                            <button onClick={() => decrementQuantity(globalIndex)}>-</button>
                            <input
                                type="number"
                                value={quantities[globalIndex]}
                                onChange={e => handleQuantityChange(globalIndex, +e.target.value)}
                                className="quantity-input"
                            />
                            <button onClick={() => incrementQuantity(globalIndex)}>+</button>
                            <span className="item-name">{item.name}</span>
                            <span className="item-sqft">{item.sqFtEach} sq ft each</span>
                            <span className="item-total">Total: {quantities[globalIndex] * item.sqFtEach} sq ft</span>
                        </div>
                    );
                })}
            </div>
        ))}
        <div className="total-section"><strong>TOTAL SQ FT = {totalSqFt}</strong></div>
    </div>
);
}

export default SquareFootageCalculator;