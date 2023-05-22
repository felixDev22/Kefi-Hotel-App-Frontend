import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import hotelsApi from '../../common/apis/hotels';
import './Main.css';
import Hotels from '../hotels/HotelListing';
import { addHotel } from '../../features/hotels';

export default function Main() {
  const dispatch = useDispatch();

  const hotelLength = useSelector((state) => state.hotels.hotels.length);
  const name = useSelector((state) => state.login.data.user.name);

  useEffect(() => {
    const fetchData = async () => {
      const resonse = await hotelsApi.get().catch((err) => {
        console.log('Err: ', err);
      });
      dispatch(addHotel(resonse.data));
    };
    fetchData();
  }, []);
  const [user, setUser] = useState([]);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('userData'));
  if (user) {
    setUser(user);
  }
}, []);

console.log(user)
  return (
    <>
        {
          hotelLength < 1 && <div className='no-hotels-container'>
             <h1>Welcome  {user.name}</h1>
             <p className="text-dark"> There are no hotels yet</p>
             <a href="/add-hotel" className=" btn btn-primary">Add Hotel</a>

          </div>

        }

      {hotelLength > 0 && (
        <div className="container">
          <hr></hr>
          <p className="title">Enjoy your stay at any of our selections</p>
          <div className="cards">
            <Hotels />
          </div>
        </div>
      )}
    </>
  );
}
