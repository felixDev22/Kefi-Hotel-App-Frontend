import React, { useEffect, useState } from 'react';
import { addReservation, deleteReservation } from '../../features/reservation';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import rectangle from '../../Assets/rectangle.png';
import Reserved from '../Reserved/Reserved';
import Dialog from '../Dialog/Dialog';
import { Link } from 'react-router-dom';
import './ReservedHotel.css';

const ReservedHotel = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.reservation);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/reservations',
        );
        const reservationsWithTotalPrice = response.data.map((reservation) => ({
          ...reservation,
          totalPrice: totalPrice(reservation),
        }));
        dispatch(addReservation(reservationsWithTotalPrice));
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservation();
  }, [dispatch]); // Add an empty dependency array

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
      currentIndex === 0 ? reservation.length - 1 : currentIndex - 1,
    );
  };

  const totalPrice = (reservation) => {
    let totalPrice = reservation.price;

    switch (reservation.room_type) {
      case 'single':
        // No price adjustment for single room
        break;
      case 'double':
        totalPrice += totalPrice * 0.25;
        break;
      case 'master-suite':
        totalPrice += totalPrice * 0.5;
        break;
      case 'king-size':
        totalPrice += totalPrice * 0.75;
        break;
      default:
        // Handle unknown room type if needed
        break;
    }

    const checkInDate = new Date(reservation.check_in);
    const checkOutDate = new Date(reservation.check_out);
    const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays * totalPrice;
  };

  if (isLoading) {
    return (
      <div>
        <Dialog message="Loading..." />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="intro">
        <h1>Reserved Hotel</h1>
        <img src={rectangle} alt="rectangle" />
        <p>All your Reserved hotels in one place</p>
      </div>
      <div className="hotel-lists">
        <Link to="/main">
          <button className="reservebtn">Reserve</button>
        </Link>
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
