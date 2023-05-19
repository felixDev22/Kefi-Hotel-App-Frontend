import React from 'react';

const HotelItem = ({ hotel, onDelete }) => {
  return (
    <div className="hotelItem">
      <img src={hotel.photo} alt={hotel.name} />
      <div className="hotelDetails">
        <h2 className="hotelName">{hotel.name}</h2>
      </div>
      <button className="btnss" onClick={() => onDelete(hotel.id)}>
        Delete
      </button>
    </div>
  );
};

export default HotelItem;
