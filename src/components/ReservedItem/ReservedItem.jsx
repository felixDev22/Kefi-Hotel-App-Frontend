import React from 'react';

const ReservedItem = ({ reservation, onDelete }) => {
  return (
    <div className="hotelItem">
      <img src={reservation.photo} alt={reservation.name} />
      <div className="hotelDetails">
        <h2 className="ReservedName">{reservation.name}</h2>
        <p className="ReservedName">Price: ${reservation.price}</p>
        <p className="ReservedName">Room Type: {reservation.room_type}</p>
        <p className="ReservedName">Check in Date: {reservation.check_in}</p>
        <p className="ReservedName">Check out date: {reservation.check_out}</p>
        <p className="ReservedName">Adults: {reservation.adults}</p>
        <p className="ReservedName">Children: {reservation.children}</p>
        <p className="ReservedName">number of rooms: {reservation.rooms}</p>
      </div>
      <button className="btnss" onClick={() => onDelete(reservation.id)}>
        Delete
      </button>
    </div>
  );
};

export default ReservedItem;
