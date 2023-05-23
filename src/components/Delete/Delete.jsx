import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addHotel, deleteHotel } from '../../features/hotels';
import './Delete.css';
import rectangle from '../../Assets/rectangle.png';
import HotelList from '../HotelList/HotelList';

const Delete = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  const hotelLength = useSelector((state) => state.hotels.hotels.length);

  useEffect(() => {
    dispatch(addHotel([]));

    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/hotels');
        dispatch(addHotel(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotels();
  }, [dispatch]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/hotels/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(deleteHotel(id));
      })
      .catch((error) => console.error(error));
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <>
      {hotelLength > 0 && (
        <div className="container">
          <div className="intro">
            <hr className="line"></hr>
            <h3 className="title">Enjoy your stay at any of our selections</h3>
          </div>

          <div className="cards">
            <Hotels />
          </div>
        </div>
      )}

      {hotelLength > 0 && (
        <div className="delete-hotels">
          <div className="info">
            <img src={rectangle} alt="rectangle" />
            <p>Changed your mind yet? Delete some hotels</p>
          </div>
          <HotelList hotels={hotels} onDelete={handleDelete} />
        </div>
      )}
    </>
  );
};

export default Delete;
