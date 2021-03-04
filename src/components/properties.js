import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Properties() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/properties")
      .then(result => setData(result.data))
  }, [])

  return (
    <div>
      <ul>
        { console.log("Data : ", data) }
        {
          data.map( item =>
            <li key={item.idProperty}>
              propertyStatus : {item.propertyStatus}<br />
              idUser : {item.idUser}<br />
            </li>
          )
        }
      </ul>
    </div>
  )
}