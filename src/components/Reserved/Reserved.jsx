import React from 'react';
import PropTypes from 'prop-types';
import ReservedItem from '../ReservedItem/ReservedItem';
import rightarr from '../../Assets/rightarr.png';
import leftarr from '../../Assets/leftarr.png';

function Reserved({
  reservation, currentIndex, onNext, onPrev, onDelete,
}) {
  const numVisibleHotels = window.innerWidth < 768 ? 1 : 3;
  return (
    <div className="delete">
      <img
        src={leftarr}
        alt="left arrow"
        className="leftarr2"
        onClick={onPrev}
      />
      <div className="hotelListss">
        {reservation.length > 0
          && reservation
            .slice(currentIndex, currentIndex + numVisibleHotels)
            .map((reservation) => (
              <ReservedItem
                key={reservation.id}
                reservation={reservation}
                onDelete={onDelete}
              />
            ))}
      </div>
      <img
        src={rightarr}
        alt="right arrow"
        className="rightarr"
        onClick={onNext}
      />
    </div>
  );
}

Reserved.propTypes = {
  reservation: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reserved;
