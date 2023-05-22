import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRooms } from '../../features/room';
import { Link, useParams } from 'react-router-dom';
import rectangle from '../../Assets/rectangle.png';
import axios from 'axios';
import './Room.css';
import back from '../../Assets/back.png';

const Room = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);

  const { hotel_id, room_type_id } = useParams();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch(addRooms([]));

    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/hotels/${hotel_id}/room_types/${room_type_id}/rooms`
        );
        dispatch(addRooms(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === rooms.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [rooms.length]);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="roomsz">
      <div className="infozz">
        <img src={rectangle} alt="rectangle" />
        <p>Get a Glimpse of the Rooms</p>
      </div>

      {/* <div className="arrowz">
        <Link to={`/hotel/${hotel_id}/reserve`}>
          <img src={back} alt="left arrow" />
        </Link>
      </div> */}

      <div className="slideshowz">
        {rooms.map((room, index) => {
          const slideClass =
            index === currentSlide
              ? 'room aactive'
              : index === currentSlide - 1 ||
                (currentSlide === 0 && index === rooms.length - 1)
              ? 'room previous'
              : 'room next';

          return (
            <div className={slideClass} key={room.id}>
              <div className="imaage">
                <img src={room.photo} alt="Room" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="ddot">
        <div className="arrowz">
          <Link to={`/hotel/${hotel_id}/reserve`}>
            <img src={back} alt="left arrow" />
          </Link>
        </div>
        <div className="dotsz">
          {rooms.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'aactive' : ''}`}
              onClick={() => handleSlideChange(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
