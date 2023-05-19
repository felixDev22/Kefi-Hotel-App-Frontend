import React, { useEffect, useState } from 'react';
import { addReservation, deleteReservation } from '../../features/reservation';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import rectangle from '../../Assets/rectangle.png';
import Reserved from '../Reserved/Reserved';
import './ReservedHotel.css';

const ReservedHotel = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.reservation);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(reservation);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/reservations'
        );
        dispatch(addReservation(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservation();
  }, []); // Add an empty dependency array

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/reservations/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(deleteReservation(id));
      })
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % reservation.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? reservation.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="delete-hotels">
      <div className="info">
        <h1>Reserved Hotel</h1>
        <img src={rectangle} alt="rectangle" />
        <p>All your Reserved hotels in one place</p>
      </div>
      <div className="hotel-lists">
        <button
          onClick={() => (window.location.href = '/reserve')}
          className="reservebtn"
        >
          Reserve
        </button>
      </div>
      <Reserved
        reservation={reservation}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ReservedHotel;
