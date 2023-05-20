import React from 'react';
import ReservedItem from '../ReservedItem/ReservedItem';
import rightarr from '../../Assets/rightarr.png';
import leftarr from '../../Assets/leftarr.png';

const Reserved = ({ reservation, currentIndex, onNext, onPrev, onDelete }) => {
  return (
    <div className="delete">
      <img src={leftarr} alt="left arrow" onClick={onPrev} />
      <div className="hotelList">
        {reservation.length > 0 &&
          reservation
            .slice(currentIndex, currentIndex + 3)
            .map((reservation) => (
              <ReservedItem
                key={reservation.id}
                reservation={reservation}
                onDelete={onDelete}
              />
            ))}
      </div>
      <img src={rightarr} alt="right arrow" onClick={onNext} />
    </div>
  );
};

export default Reserved;
