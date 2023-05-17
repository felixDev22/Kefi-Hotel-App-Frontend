import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms, selectRooms } from '../../features/room';
import axios from 'axios';

const Room = ({ hotelId, roomTypeId }) => {
  const dispatch = useDispatch();
  const rooms = useSelector(selectRooms);
  console.log(rooms);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/hotels/${hotelId}/room_types/${roomTypeId}/rooms`
        );
        dispatch(fetchRooms(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoomsData();
  }, [dispatch, hotelId, roomTypeId]);

  return (
    <div className="rooms">
      <h1>Rooms</h1>
      {rooms.map((room) => (
        <div className="room" key={room.id}>
          <h2>{room.room_name}</h2>
          <h3>{room.price}</h3>
          <h3>{room.desc}</h3>
          <img src={room.photo} alt="Room" />
        </div>
      ))}
    </div>
  );
};

export default Room;
