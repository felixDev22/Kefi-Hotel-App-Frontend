import React from 'react'
import Mombassa from '../../Assets/mombassa.png';
import vec from '../../Assets/vec.png';
export default function hotel({hotel}) {
  return (
        <div class="card">
                    <img src={Mombassa} className="card-img-top" alt="Mombassa"/>
                    <div class="card-body">
                    <h5 class="card-title cardtitle">{hotel.name}</h5>
                    <img src={vec} alt="Mombassa"/>
                    <ul className="rating">
                            <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                9.5 Execeptional
                            </li>
                            <li>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </li>
                            <li>
                            <i class="fa-solid fa-location-crosshairs"></i>
                            </li>
                            <li>
                                Mombassa
                            </li>

                    </ul>
                    <div className = 'price'>
                        <p>Price: <span>$425</span></p>
                    </div>
                    <p class="card-text"> {hotel.desc}</p>
                    <a href="#" class="btn btn-primary">Book Now</a>
                    </div>
        </div>
  )
}
