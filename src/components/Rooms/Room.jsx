import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRoom } from '../../features/room';
import axios from 'axios';

const Room = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  console.log(rooms);

  useEffect(() => {
    dispatch(addRoom([]));

    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/hotels/${hotel_id}/room_type/${room_type_id}/rooms`
        );
        dispatch(addRoom(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div className="rooms">
      <h1>Rooms</h1>
      {rooms.map((room) => {
        return (
          <div className="room">
            <h2>{room.room_name}</h2>
            <h3>{room.price}</h3>
            <h3>{room.desc}</h3>
            <img src={room.photo} />
          </div>
        );
      })}
    </div>
  );
};

export default Room;
