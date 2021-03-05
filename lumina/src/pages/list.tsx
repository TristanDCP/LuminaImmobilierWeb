import React, { FunctionComponent, useState } from 'react';

const List: FunctionComponent = () => {

  const [properties, setProperties] = useState();
  // read all entities
  fetch("https://api.lumina.cda4.lh.manusien-ecolelamanu.fr/api/v1/properties", {
    "method": "GET",
  })
  .then(response => response.json())
  .then(response => {
    setProperties(response);
    console.log(properties);
    console.log(response);
  })
  .catch(err => { console.log(err); 
  });

  return (
    <div>
      { useState(properties).map(({ id}) => {
        return (
          <div key={id}>
          </div>
        );
      })}
    </div>
  );
}

export default List;

