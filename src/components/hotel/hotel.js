import React from 'react';
import vec from '../../Assets/vec.png';
import './hotel.css';
import { Link } from 'react-router-dom';

export default function hotel({ hotel }) {
  return (
    <div class="card">
      <img src={hotel.photo} className="card-img-top" alt={hotel.name} />
      <div class="card-body">
        <h5 class="card-title cardtitle">{hotel.name}</h5>
        <img src={vec} alt="Mombassa" />
        <ul className="rating">
          <li>
            <i class="fa fa-star" aria-hidden="true"></i>
            {hotel.rating}
          </li>
          <li>
            <i class="fa fa-circle" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            {hotel.location}
          </li>
        </ul>
        <div className="price">
          <p>
            Price: <span>${hotel.price}</span>
          </p>
        </div>
        <p class="card-text"> {hotel.desc}</p>
        <Link
          to={{
            pathname: `/hotel/${hotel.id}/reserve`,
            state: {
              hotel: hotel,
            },
          }}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
}
