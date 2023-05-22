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
      {hotelLength < 1 && (
        <div className="container">
          <h1>Hi {user.name} </h1>
          <p className="text-dark"> There are no hotels yet in the system</p>
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
