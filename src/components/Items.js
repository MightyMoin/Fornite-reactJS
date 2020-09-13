import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemDetails();
  }, []);

  const itemDetails = async () => {
    const response = await fetch(
      'https://fortnite-api.theapinetwork.com/store/get'
    );
    const data = await response.json();
    var allItems = data.data;
    var elem = allItems.pop()
    allItems.reverse()
    allItems.push(elem)
    setItems(allItems);
  };

  return (
    <div style={{'overflow' : 'hidden'}}>
        <h2 className="display-3 text-center mt-3">Items</h2>
        <div className="row mt-3 ">
        {items.map((item) => (
          <Card key={item.itemId} id={item.itemId}y item={item.item}></Card>
        ))}
      </div>
    </div>
  );
}
