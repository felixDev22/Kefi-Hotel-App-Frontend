import React, { useState } from 'react';
import Hotel from '../hotel/hotel';
import { useSelector } from 'react-redux';
import rightarr from '../../Assets/rightarr.png';
import leftarr from '../../Assets/leftarr.png';
import './hotellisting.css';
import '../Delete/Delete.css';

export default function HotelListing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % hotels.length);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? hotels.length - 1 : currentIndex - 1);
  };

  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <div className="hotelList">
      <img
        src={leftarr}
        className="leftarr"
        alt="left arrow"
        onClick={handlePrev}
      />
      <div className="d-flex justify-content-center align-items-center">
        {hotels.length > 0 &&
          hotels.slice(currentIndex, currentIndex + 3).map((hotel) => {
            return (
              <div className="col-lg-4 px-2" key={hotel.id}>
                <Hotel hotel={hotel} />
              </div>
            );
          })}
      </div>
      <img
        src={rightarr}
        className="rightarr"
        alt="right arrow"
        onClick={handleNext}
      />
    </div>
  );
}
