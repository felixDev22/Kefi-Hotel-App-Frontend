import React from 'react';
import ReservedItem from '../ReservedItem/ReservedItem';
import rightarr from '../../Assets/rightarr.png';
import leftarr from '../../Assets/leftarr.png';

const Reserved = ({ reservation, currentIndex, onNext, onPrev, onDelete }) => {
  const numVisibleHotels = window.innerWidth < 768 ? 1 : 3;
  return (
    <div className="delete">
      <img src={leftarr} alt="left arrow" onClick={onPrev} />
      <div className="hotelListss">
        {reservation.length > 0 &&
          reservation
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
};

export default Reserved;
