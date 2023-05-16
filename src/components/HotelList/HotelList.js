// src/components/HotelList.js

import React from 'react';
import HotelItem from '../HotelItem/HotelItem';
import rightarr from '../../Assets/rightarr.png';
import leftarr from '../../Assets/leftarr.png';

const HotelList = ({ hotels, currentIndex, onNext, onPrev, onDelete }) => {
  return (
    <div className="delete">
      <img src={leftarr} alt="left arrow" onClick={onPrev} />
      <div className="hotelList">
        {hotels.length > 0 &&
          hotels
            .slice(currentIndex, currentIndex + 3)
            .map((hotel) => (
              <HotelItem key={hotel.id} hotel={hotel} onDelete={onDelete} />
            ))}
      </div>
      <img
        src={rightarr}
        alt="right arrow"
        onClick={onNext}
        className="rightarr"
      />
    </div>
  );
};

export default HotelList;
