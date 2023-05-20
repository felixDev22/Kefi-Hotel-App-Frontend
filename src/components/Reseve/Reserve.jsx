import React, { useState, useEffect } from 'react';
import './Reserve.css';
import { useParams } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  reserveActions,
  selectReserveError,
} from '../../features/slices/reserve/reserveSlice';
import {
  fetchHotel,
  selectSingleHotel,
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

  // const [user_id, setUserId] = useState(0);

  const [reservationSuccessful, setReservationSuccessful] = useState(false);

  const [isRoomTypeValid, setIsRoomTypeValid] = useState(true);
  const user_id = useSelector(state => state.login.data.user.id)

  const dispatch = useDispatch();

  const hotel = useSelector(selectSingleHotel);
  const rooms = useSelector(selectRooms);

  console.log('Rooms from the reserve component', rooms);
  console.log('Hotel data from the reserve component', hotel);

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
    console.log(dispatch(readRooms(id)));
    console.log(dispatch(fetchHotel(id)));
    if (reservation.roomType === '') {
      setReservation({
        ...reservation,
        roomType: 'Single',
      });
    }
    if (isLoading) {
      setDialogVisible(true);
    } else {
      setDialogVisible(false);
    }

    setTotalPrice(getTotalPrice());
  }, [
    dispatch,
    id,
    reservation,
    isLoading,
    checkInDate,
    checkOutDate,
    reservation.rooms,
  ]);

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
      console.log('Data not valid');
      return;
    }
    setIsLoading(true);
    try {
      const formData = {
        user_id: user_id,
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
      console.log('Response from the reserve component', response);

      if (response.payload) {
        setIsLoading(false);
        setDialogVisible(true);
        setReservationSuccessful(true);
        console.log('Reservation successful!');

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
          selectReserveError()
        );
      }
    } catch (error) {
      setIsLoading(false);
      setError(
        'An error occurred during room reservation. Please try again later.'
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

  const getTotalPrice = () => {
    if (!hotel || !checkInDate || !checkOutDate || !reservation.rooms) {
      return 0;
    }

    const basePrice = hotel.price;
    const numberOfRooms = reservation.rooms;
    const numberOfDays = calculateNumberOfDays(checkInDate, checkOutDate);

    let totalPrice = basePrice * numberOfDays * numberOfRooms;
    switch (reservation.roomType) {
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
        break;
    }

    return totalPrice;
  };

  const [totalPrice, setTotalPrice] = useState(getTotalPrice());

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

  if (!hotel) {
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
                <p className="actual-price">
                  $ {isNaN(totalPrice) ? hotel.price : totalPrice.toFixed(2)}
                </p>

                {/* <p className="actual-price">$ {hotel.price}</p> */}
              </span>
            </div>
          </div>

          <div className="reserve-form-container">
            <div className="reserve-left">
              <div className="reserve-card">
                <img
                  src={hotel.photo}
                  alt="Hotel Image"
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
                      disabled={isAdultMinimumReached}
                    >
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
                      disabled={isAdultMaximumReached}
                    >
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
                      disabled={isRoomButtonDisabled}
                    >
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
                      }
                    >
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
                    }}
                  >
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
                    disabled={isRoomButtonDisabled}
                  >
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
                    disabled={isRoomButtonDisabled}
                  >
                    +
                  </button>
                </div>

                <div className="reserve-buttons">
                  <button
                    type="submit"
                    className={buttonClassName}
                    disabled={!validateReservation() || reservationSuccessful}
                    onClick={handleReservationSubmit}
                  >
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

                  <button
                    type="button"
                    className="my-reservation"
                    to="/reservation"
                  >
                    Rooms
                  </button>
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
