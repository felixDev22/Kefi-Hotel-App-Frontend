import React, { useState, useEffect } from 'react';
import './Reserve.css';
import { Link, useParams } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  reserveActions,
  selectReserveError,
} from '../../features/slices/reserve/reserveSlice';
import {
  fetchHotel,
  selectSingleHotel,
  selectSingleHotelLoading,
} from '../../features/slices/reserve/singleReserveSlice';
import {
  readRooms,
  selectRooms,
} from '../../features/slices/roomTypes/fetchRooms';

const Reserve = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const [error, setError] = useState(null);

  const [reservationSuccessful, setReservationSuccessful] = useState(false);

  const [isRoomTypeValid, setIsRoomTypeValid] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      setUser(user);
    }
  }, []);

  const dispatch = useDispatch();

  const hotel = useSelector(selectSingleHotel);
  const rooms = useSelector(selectRooms);

  const isLoadingHotel = useSelector(selectSingleHotelLoading);

  const { id } = useParams();

  const [reservation, setReservation] = useState({
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: 0,
    rooms: 1,
    roomType: '',
  });

  useEffect(() => {
    dispatch(fetchHotel(id));
    dispatch(readRooms(id));

    if (isLoading) {
      setDialogVisible(true);
    } else {
      setDialogVisible(false);
    }

  }, [id, dispatch, isLoading]);


  const validateReservation = () => {
    if (!checkInDate || !checkOutDate) {
      return false;
    } else if (reservation.adults < 1 || reservation.adults > 4) {
      return false;
    } else if (reservation.children < 0 || reservation.children > 6) {
      return false;
    } else if (reservation.rooms < 1) {
      return false;
    }

    return true;
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();

    if (!validateReservation()) {
      return;
    }
    setIsLoading(true);
    try {
      const formData = {
        user_id: user.id,
        name: hotel.name,
        price: hotel.price,
        photo: hotel.photo,
        check_in: reservation.checkInDate,
        check_out: reservation.checkOutDate,
        hotel_id: parseInt(hotel.id),
        adults: reservation.adults,
        children: reservation.children,
        room_type: reservation.roomType,
        rooms: reservation.rooms,
      };
      const response = await dispatch(reserveActions.reserveHotel(formData));

      if (response.payload) {
        setIsLoading(false);
        setDialogVisible(true);
        setReservationSuccessful(true);

        setReservation({
          checkInDate: '',
          checkOutDate: '',
          adults: 0,
          children: 0,
          roomType: '',
          rooms: 0,
        });
      } else {
        setIsLoading(false);
        console.error(
          'An error occurred during room reservation:',
          selectReserveError(),
        );
      }
    } catch (error) {
      setIsLoading(false);
      setError(
        'An error occurred during room reservation. Please try again later.',
      );
      console.error('An error occurred during room reservation:', error);
    }
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

  const getMinCheckOutDate = () => {
    if (!checkInDate) {
      return getCurrentDate();
    }

    const checkIn = new Date(checkInDate);
    checkIn.setDate(checkIn.getDate() + 1);

    const year = checkIn.getFullYear();
    let month = checkIn.getMonth() + 1;
    let day = checkIn.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const calculateNumberOfDays = (checkIn, checkOut) => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return numberOfDays;
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const isRoomButtonDisabled =
    reservation.adults >= 2 && reservation.children >= 4;

  const isAdultMaximumReached = reservation.adults >= 4;
  const isAdultMinimumReached = reservation.adults <= 1;
  const isChildrenMaximumReached = reservation.children >= 6;

  const buttonClassName = validateReservation()
    ? reservationSuccessful
      ? 'invalid-button'
      : 'reserve-button'
    : 'invalid-button';

  useEffect(() => {
    if (!checkInDate || !checkOutDate || !reservation.rooms) {
      setTotalPrice(hotel.price);
      return;
    }

    const basePrice = hotel.price;
    const numberOfRooms = reservation.rooms;
    const numberOfDays = calculateNumberOfDays(checkInDate, checkOutDate);

    let tPrice = basePrice * numberOfDays * numberOfRooms;
    console.log(reservation.roomType);
    switch (reservation.roomType) {
      case 'Double':
        tPrice += tPrice * 0.25;
        break;
      case 'Master Suite':
        tPrice += tPrice * 0.5;
        break;
      case 'King Size':
        tPrice += tPrice * 0.75;
        break;
      default:
        break;
    }

    setTotalPrice(tPrice);
  }, [
    hotel.price,
    checkInDate,
    checkOutDate,
    reservation.rooms,
    reservation.roomType,
  ]);

  if (isLoadingHotel) {
    return <LoadingDialog />;
  } else {
    return (
      <>
        <div className="reserve-container">
          <div className="reserve-intro">
            <span className="line"></span>
            <h3 className="reserve-title">Book your Hotel Reservations</h3>
            <div className="reserve-subtitle">
              <p className="hotel-name">{hotel.name}</p>
              <span className="hotel-price-container">
                <p className="hotel-price">Price:</p>
                <p className="actual-price">$ {totalPrice}</p>

                {/* <p className="actual-price">$ {hotel.price}</p> */}
              </span>
            </div>
          </div>

          <div className="reserve-form-container">
            <div className="reserve-left">
              <div className="reserve-card">
                <img
                  src={hotel.photo}
                  alt={hotel.name}
                  className="reserve-hotel-image"
                />
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
                    onChange={(e) => {
                      setCheckInDate(e.target.value);
                      setReservation({
                        ...reservation,
                        checkInDate: e.target.value,
                      });
                    }}
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
                    min={getMinCheckOutDate()}
                    onChange={(e) => {
                      setCheckOutDate(e.target.value);
                      setReservation({
                        ...reservation,
                        checkOutDate: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="adult-children">
                  <div className="total-adult">
                    <p className="adult">Adults</p>
                    <button
                      type="button"
                      className="minus"
                      onClick={() =>
                        setReservation({
                          ...reservation,
                          adults: Math.max(reservation.adults - 1, 1),
                        })
                      }
                      disabled={isAdultMinimumReached}>
                      -
                    </button>
                    <p className="number">{reservation.adults}</p>
                    <button
                      type="button"
                      className="plus"
                      onClick={() =>
                        setReservation({
                          ...reservation,
                          adults: Math.min(reservation.adults + 1, 4),
                        })
                      }
                      disabled={isAdultMaximumReached}>
                      +
                    </button>
                  </div>

                  <div className="total-children">
                    <p className="children">Children</p>
                    <button
                      type="button"
                      className="minus"
                      onClick={() =>
                        setReservation({
                          ...reservation,
                          children: Math.max(reservation.children - 1, 0),
                        })
                      }
                      disabled={isRoomButtonDisabled}>
                      -
                    </button>
                    <p className="number">{reservation.children}</p>
                    <button
                      type="button"
                      className="plus"
                      onClick={() =>
                        setReservation({
                          ...reservation,
                          children: Math.min(reservation.children + 1, 6),
                        })
                      }
                      disabled={
                        isRoomButtonDisabled || isChildrenMaximumReached
                      }>
                      +
                    </button>
                  </div>
                </div>

                <div className="room-type">
                  <select
                    className={`room-type-select ${
                      isRoomTypeValid ? '' : 'invalid'
                    }`}
                    value={reservation.roomType}
                    onChange={(e) => {
                      setReservation({
                        ...reservation,
                        roomType: e.target.value,
                      });
                      setIsRoomTypeValid(true);
                    }}>
                    <option value="">Select a Room Type</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name}
                      </option>
                    ))}
                  </select>

                  {!isRoomTypeValid && (
                    <p className="error-message">Please select a room type</p>
                  )}
                </div>

                <div className="rooms-container">
                  <p className="rooms">Rooms</p>
                  <button
                    type="button"
                    className="minus"
                    onClick={() =>
                      setReservation({
                        ...reservation,
                        rooms: Math.max(reservation.rooms - 1, 1),
                      })
                    }
                    disabled={isRoomButtonDisabled}>
                    -
                  </button>
                  <p className="number">{reservation.rooms}</p>
                  <button
                    type="button"
                    className="plus"
                    onClick={() =>
                      setReservation({
                        ...reservation,
                        rooms: Math.min(reservation.rooms + 1, 6),
                      })
                    }
                    disabled={isRoomButtonDisabled}>
                    +
                  </button>
                </div>

                <div className="reserve-buttons">
                  <button
                    type="submit"
                    className={buttonClassName}
                    disabled={!validateReservation() || reservationSuccessful}
                    onClick={handleReservationSubmit}>
                    {isLoading
                      ? 'Reserving...'
                      : reservationSuccessful
                      ? 'Reserved'
                      : 'Reserve'}
                  </button>

                  {error && (
                    <div className="error-message">
                      <p>{error}</p>
                    </div>
                  )}

                  {dialogVisible && !error && (
                    <Dialog message="Loading..." isLoading={isLoading} />
                  )}

                  <Link
                    to={`/hotels/${hotel.id}/room_types/${
                      rooms.find((room) => room.name === reservation.roomType)
                        ?.id
                    }/rooms`}>
                    <button type="button" className="my-reservation">
                      View Rooms
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Reserve;

const LoadingDialog = () => (
  <div>
    <Dialog message="Loading..." isLoading={true} />
  </div>
);
