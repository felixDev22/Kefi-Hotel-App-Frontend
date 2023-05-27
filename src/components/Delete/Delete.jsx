import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addHotel, deleteHotel } from '../../features/hotels';
import './Delete.css';
import rectangle from '../../Assets/rectangle.png';
import HotelList from '../HotelList/HotelList';
import Dialog from '../Dialog/Dialog';

function Delete() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(addHotel([]));
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/hotels');
        dispatch(addHotel(response.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      setLoading(false);
    };

    fetchHotels();
  }, [dispatch]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/hotels/${id}`)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        dispatch(deleteHotel(id));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <Dialog message="Loading" />
      ) : hotels.length < 1 ? (
        <div className="no-hotels-container">
          <h1>
            Welcome
            {' '}
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </h1>
          <p className="text-dark"> There are no hotels yet</p>
          <a href="/add-hotels" className=" btn btn-primary">
            Add Hotel
          </a>
        </div>
      ) : (
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
}

export default Delete;
