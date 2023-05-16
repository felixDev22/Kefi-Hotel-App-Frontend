import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import hotels from '../../common/apis/hotels';
import './Main.css';
import Hotels from '../hotels/HotelListing';
import { addHotel } from '../../features/hotels';
import Navigation from '../navigation/Navigation'

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const resonse = await hotels.get().catch((err) => {
        console.log('Err: ', err);
      });
      dispatch(addHotel(resonse.data));
    };
    fetchData();
  }, []);
  return (
    <>
      <Navigation />
      <div className="container">
      <hr></hr>
      <p className="title">Enjoy your stay at any of our selections</p>
      <div className="cards">
        <Hotels />
      </div>
    </div>
    </>
  );
}
