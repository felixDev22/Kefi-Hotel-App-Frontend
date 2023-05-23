import React from 'react';

const ReservedItem = ({ reservation, onDelete }) => {
  return (
    <div className="card">
      <img
        src={reservation.photo}
        className="card-img-top"
        alt={reservation.name}
      />
      <div className="hotelDetails">
        <h5 className="reserveName">{reservation.name}</h5>
        <div className="priceandtype reserves">
          <p>
            <span>Price:</span> ${reservation.totalPrice}
          </p>
          <p>
            <span>Room Type:</span> {reservation.room_type}
          </p>
        </div>
        <div className="checks reserves">
          <p>
            <span>Check in:</span> {reservation.check_in}
          </p>
          <p className="out">
            <span>Check out:</span> {reservation.check_out}
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
      <div className="card-body">
        <button
          className="btn btn-primary"
          onClick={() => onDelete(reservation.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReservedItem;
