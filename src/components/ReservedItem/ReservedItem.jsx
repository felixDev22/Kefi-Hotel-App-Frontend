import React from 'react';

const ReservedItem = ({ reservation, onDelete }) => {
  return (
    <div className="hotelItem">
      <img src={reservation.photo} alt={reservation.name} />
      <div className="hotelDetails">
        <h2 className="reserveName">{reservation.name}</h2>
        <div className="priceandtype reserves">
          {' '}
          <p>
            <span>Price:</span> ${reservation.totalPrice}
          </p>
          <p>
            <span>Room Type:</span> {reservation.room_type}
          </p>
        </div>
        <div className="checks reserves">
          <p>
            <span>Check in Date:</span> {reservation.check_in}
          </p>
          <p>
            <span>Check out date:</span> {reservation.check_out}
          </p>
        </div>
        <div className="adultschil reserves">
          <p>
            <span>Adults:</span> {reservation.adults}
          </p>
          <p>
            <span>Children:</span> {reservation.children}
          </p>
          <p>
            <span>Rooms:</span> {reservation.rooms}
          </p>
        </div>
      </div>
      <button className="btnss" onClick={() => onDelete(reservation.id)}>
        Delete
      </button>
    </div>
  );
};

export default ReservedItem;
