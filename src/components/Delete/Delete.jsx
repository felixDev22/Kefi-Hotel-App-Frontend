import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteHotel, setHotels } from '../../redux/hotelSlice';
import './Delete.css';
import rightarr from '../../Assets/rightarr.png';
import leftarr from '../../Assets/leftarr.png';
import rectangle from '../../Assets/rectangle.png';
import dash from '../../Assets/dashed.png';

const Delete = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/hotels')
      .then((response) => dispatch(setHotels(response.data)))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/hotels/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(deleteHotel(id));
      })
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % hotels.length);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? hotels.length - 1 : currentIndex - 1);
  };

  return (
    <div className="delete-hotels">
      <div className="info">
        <img src={rectangle} alt="rectangle" />
        <p>Changed your mind yet, Delete some hotels</p>
      </div>
      <div className="delete">
        <img src={leftarr} onClick={handlePrev} alt="left arrow" />
        <div className="hotelList">
          <ul>
            {hotels &&
              hotels.length > 0 &&
              hotels.slice(currentIndex, currentIndex + 3).map((hotel) => (
                <li key={hotel.id} className="hotelItem">
                  <img src={hotel.photo} alt={hotel.name} />
                  <div className="hotelDetails">
                    <h2 className="hotelName">{hotel.name}</h2>
                    <span>
                      <img className="hr" src={dash} alt="dash" />
                    </span>
                    <p>{hotel.desc}</p>
                  </div>
                  <button
                    className="deletebtn"
                    onClick={() => handleDelete(hotel.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <img
          src={rightarr}
          onClick={handleNext}
          className="rightarr"
          alt="right arrow"
        />
      </div>
    </div>
  );
};

export default Delete;
