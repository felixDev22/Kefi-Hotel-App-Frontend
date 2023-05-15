import React from 'react'
import Hotel from '../hotel/hotel'
import { useSelector } from 'react-redux'

export default function HotelListing() {
  const hotels = useSelector(state => state.hotels);
  console.log('this is the data', hotels);
  return (
    hotels.map((hotel, index) => {
      return <Hotel key={index} hotel={hotel}/>
    })
  )
}
