import React, { useState } from 'react';
import './Reserve.css';
import Navigation from '../navigation/Navigation';
import image from '../../Assets/blue-sea.png';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const Reserve = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const hotels = useSelector((state) => state.hotels);

  const [reservation, setReservation] = useState({
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: 0,
    rooms: 1,
  });


  const location = useLocation();
  const hotel = location.state?.hotel;

  if (!hotel) {
    return <div>No hotel data found.</div>;
  }


  const handleReservationSubmit = (e) => {
    e.preventDefault();
    console.log('this is the reservation data', reservation);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };


  return (
    <>
      <Navigation />
      <div className="reserve-container">
        <div className="reserve-intro">
          <span className="line"></span>
          <h3 className="reserve-title">Book your Hotel Reservations</h3>
          <div className="reserve-subtitle">
            <p className="hotel-name">{hotel.name}</p>
            <span className="hotel-price-container">
              <p className="hotel-price">Price:</p>
              <p className="actual-price">$ {hotel.price}</p>
            </span>
          </div>
        </div>

        <div className="reserve-form-container">
          <div className="reserve-left">
            <div className="reserve-card">
              <img src={hotel.photo} alt="Hotel Image" className="reserve-hotel-image" />
            </div>
          </div>

          <div className="reserve-right">
            <form onSubmit={handleReservationSubmit}>
              <div>
                <input
                  type="date"
                  id="check-in-date"
                  name="check-in-date"
                  className="form-input"
                  placeholder="Check-in Date"
                  value={checkInDate}
                  min={getCurrentDate()}
                  onChange={(e) => { setCheckInDate(e.target.value); setReservation({ ...reservation, checkInDate: e.target.value }); }}
                />
              </div>

              <div>
                <input
                  type="date"
                  id="check-out-date"
                  name="check-out-date"
                  className="form-input"
                  placeholder="Check-out Date"
                  value={checkOutDate}
                  onChange={(e) => { setCheckOutDate(e.target.value); setReservation({ ...reservation, checkOutDate: e.target.value }); }}
                />
              </div>

              <div className="adult-children">
                <div className="total-adult">
                  <p className="adult">Adults</p>
                  <button type="button" className="minus"
                    onClick={() => setReservation({ ...reservation, adults: Math.max(reservation.adults - 1, 0) })}
                  >
                    -
                  </button>
                  <p className="number">{reservation.adults}</p>
                  <button type="button" className="plus"
                    onClick={() => setReservation({ ...reservation, adults: reservation.adults + 1 })}
                  >
                    +
                  </button>
                </div>

                <div className="total-children">
                  <p className="children">Children</p>
                  <button type="button" className="minus"
                    onClick={() => setReservation({ ...reservation, children: Math.max(reservation.children - 1, 0) })}
                  >
                    -
                  </button>
                  <p className="number">{reservation.children}</p>
                  <button type="button" className="plus"
                    onClick={() => setReservation({ ...reservation, children: reservation.children + 1 })}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="rooms-container">
                <p className="rooms">Rooms</p>
                <button type="button" className="minus"
                  onClick={() => setReservation({ ...reservation, rooms: Math.max(reservation.rooms - 1, 0) })}
                >
-
                </button>
                <p className="number">{reservation.rooms}</p>
                <button type="button" className="plus"
                  onClick={() => setReservation({ ...reservation, rooms: reservation.rooms + 1 })}
                >
                +
                </button>
              </div>
                        <div className="other-images">
            <div className="image-left">hello</div>
            <div className="image-right">other image</div>
          </div>

          <div className="reserve-buttons">
                <button type="submit" className="reserve-button"
                  onClick={
                    () => {
                      console.log('this is the hotels data', hotels);
                    }
                  }
                >
              Reserve
            </button>
            <button type="button" className="my-reservation" to='/reservation'>
              My Reservation
            </button>
          </div>
        </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Reserve;
