import React from 'react';

const HotelItem = ({ hotel, onDelete }) => {
  return (
    <div className="hotelItems">
      <img src={hotel.photo} alt={hotel.name} />
      <div className="hotelDetails">
        <h2 className="hotelName">{hotel.name}</h2>
      </div>
      <button className="btnssz" onClick={() => onDelete(hotel.id)}>
        Delete
      </button>
    </div>
  );
};

export default HotelItem;
