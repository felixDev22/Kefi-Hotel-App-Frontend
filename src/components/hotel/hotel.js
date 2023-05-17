import React from 'react'
import { Link } from 'react-router-dom';
import Mombassa from '../../Assets/mombassa.png';
import vec from '../../Assets/vec.png';


export default function hotel({ hotel }) {

  return (
        <div class="card">
                    <img src={hotel.photo} className="card-img-top" alt="Mombassa"/>
                    <div class="card-body">
                    <h5 class="card-title cardtitle">{hotel.name}</h5>
                    <img src={vec} alt="Mombassa"/>
                    <ul className="rating">
                            <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                {hotel.rating} Execeptional
                            </li>
                            <li>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </li>
                            <li>
                            <i class="fa-solid fa-location-crosshairs"></i>
                            </li>
                            <li>
                                {hotel.location}
                            </li>

                    </ul>
                    <div className = 'price'>
                        <p>Price: <span>${hotel.price}</span></p>
                    </div>

                    <p class="card-text"> {hotel.desc}</p>
                    <button button class = "btn btn-primary" >
                        <Link to={`/reserve/${hotel.id}`} state={{ hotel: hotel }}> Book Now</Link>
                    </button>

                    </div>
        </div>
    )
}
