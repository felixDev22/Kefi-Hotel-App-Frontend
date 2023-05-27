import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import hotelsApi from '../../common/apis/hotels';
import './Main.css';
import rectangle from '../../Assets/rectangle.png';
import Hotels from '../hotels/HotelListing';
import { addHotel } from '../../features/hotels';
import Dialog from '../Dialog/Dialog';

export default function Main() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resonse = await hotelsApi.get().catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Err: ', err);
      });
      setLoading(false);
      dispatch(addHotel(resonse.data));
    };
    fetchData();
  }, [dispatch]);
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
        <div className="container">
          <div className="intro">
            <h2>Hotels</h2>
            <img src={rectangle} alt="rectangle" />
            <h3 className="title">Enjoy your stay at any of our selections</h3>
          </div>

          <div className="cards">
            <Hotels />
          </div>
        </div>
      )}
    </>
  );
}
