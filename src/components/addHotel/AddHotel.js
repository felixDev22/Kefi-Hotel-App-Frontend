import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addHotel, newHotel } from '../../features/hotels';
import '../../components/login/login.css';
import './addHotel.css';
// import newpic from '../../Assets/sign.png';

const AddHotel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);
  const [hotelName, setHotelName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
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

  const handleNewHotel = (e) => {
    e.preventDefault();
    const newHotelData = {
      name: hotelName,
      photo: photoURL,
      rating: parseInt(rating),
      location: location,
      price: parseInt(price),
      desc: desc,
    };

    axios
      .post('http://localhost:3000/api/v1/hotels', newHotelData)
      .then((response) => {
        dispatch(newHotel(response.data));
        resetForm();
      })
      .catch((error) => console.error(error));
  };

  const resetForm = () => {
    setHotelName('');
    setPhotoURL('');
    setRating('');
    setLocation('');
    setPrice('');
    setDesc('');
  };

  return (
    <div className="wrapper-add">
      <div className="row">
        <div className="col-md-6">
          <div className="add-title">
            <h4>Add hotel:</h4>
          </div>
          <form onSubmit={handleNewHotel}>
            <div className="input-field">
              <input
                type="text"
                className="input"
                id="hotelName"
                required
                autoComplete="off"
                placeholder="Hotel Name"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                id="photoURL"
                required
                autoComplete="off"
                placeholder="Photo URL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                className="input"
                id="rating"
                required
                autoComplete="off"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                id="location"
                required
                autoComplete="off"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                id="price"
                required
                autoComplete="off"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                id="desc"
                required
                autoComplete="off"
                placeholder="Brief Intro"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="submit" className="add-btn">
              <p>Add</p>
            </button>
          </form>
        </div>
        <div className="col-md-6 pic">
          <h4>New hotel:</h4>
          <div>
            <div className="new-hotel">
              <div className="new-hotel-pic">
                <img src={photoURL} alt="Hotel" />
              </div>
              <h5>{hotelName}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
