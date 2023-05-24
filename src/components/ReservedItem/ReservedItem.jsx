import React from 'react';
import PropTypes from 'prop-types';

function ReservedItem({ reservation, onDelete }) {
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
            <span>Price:</span>
            {' '}
            $
            {reservation.totalPrice}
          </p>
          <p>
            <span>Room Type:</span>
            {' '}
            {reservation.room_type}
          </p>
        </div>
        <div className="checks reserves">
          <p>
            <span>Check in:</span>
            {' '}
            {reservation.check_in}
          </p>
          <p className="out">
            <span>Check out:</span>
            {' '}
            {reservation.check_out}
          </p>
        </div>
        <div className="adultschil reserves">
          <p>
            <span>Adults:</span>
            {' '}
            {reservation.adults}
          </p>
          <p>
            <span>Children:</span>
            {' '}
            {reservation.children}
          </p>
          <p>
            <span>Rooms:</span>
            {' '}
            {reservation.rooms}
          </p>
        </div>
      </div>
      <div className="card-body">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => onDelete(reservation.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

ReservedItem.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    room_type: PropTypes.string.isRequired,
    check_in: PropTypes.string.isRequired,
    check_out: PropTypes.string.isRequired,
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
    rooms: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReservedItem;
