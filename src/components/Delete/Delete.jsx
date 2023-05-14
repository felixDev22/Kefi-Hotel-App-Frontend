import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Delete.css';

const Delete = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/hotels')
      .then((response) => setHotels(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/hotels/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  return (
    <div className="delete-hotels">
      <h1>Delete Hotelss</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {console.log(hotel.id)}
            <img src={hotel.photo} />
            <h2>{hotel.name}</h2>
            <p>{hotel.desc}</p>
            <button onClick={() => handleDelete(hotel.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
