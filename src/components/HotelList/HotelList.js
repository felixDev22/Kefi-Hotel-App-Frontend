import React from 'react';
import HotelItem from '../HotelItem/HotelItem';

const HotelList = ({ hotels, onDelete }) => {
  return (
    <div className="deletes">
      <div className="hotelLists">
        {hotels.map((hotel) => (
          <HotelItem key={hotel.id} hotel={hotel} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
