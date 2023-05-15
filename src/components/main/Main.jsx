import React from 'react';
import {useEffect} from 'react';
import Mombassa from '../../Assets/mombassa.png';
import Swazi from '../../Assets/swazi.png';
import BlueSea from '../../Assets/blue-sea.png';
import Line from '../../Assets/line.png';
import vec from '../../Assets/vec.png';
import hotels from '../../common/apis/hotels'
import './Main.css';

export default function Main() {

    useEffect(() => {
            const fetchData = async () => {
                const resp = await hotels.get()
                console.log(resp)
            }

            fetchData()
        }, [])
  return (
        <div className="container">
            <hr></hr>
            <p className="title">Enjoy your stay at any of our selections</p>
            <div className="cards">
                <div class="card">
                <img src={Mombassa} className="card-img-top" alt="Mombassa"/>
                <div class="card-body">
                <h5 class="card-title cardtitle">Mombassa Resort</h5>
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
                <p class="card-text"> Set in tropical gardens, this elegant beach front hotel is 1 km from Jomo Kenyatta Public Beach, 15 km from Fort Jesus and 9 km from the Jumba la Mtwana</p>
                <a href="#" class="btn btn-primary">Book Now</a>
                </div>
                </div>
                </div>
        </div>
        
  )
}
