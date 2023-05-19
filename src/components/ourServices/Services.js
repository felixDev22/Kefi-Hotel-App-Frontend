import React from 'react';
import conference from '../../Assets/conference.png';
import reception from '../../Assets/reception.png';
import './services.css';

export const Services = () => {
  return (
    <div className="service-wrapper">
      <div className="pic-wrapper container">
        <div className="box">
          <img src={conference} alt="pic1" className="service-pic" />
        </div>
        <div className="box">
          <h6>Hospitality</h6>
        </div>
        <div className="box">
          <img src={reception} alt="pic1" className="service-pic" />
        </div>
        <div className="box">grid 3</div>
        <div className="box">grid 4</div>
        <div className="box">grid 5</div>
        <div className="box">grid 6</div>
        <div className="box">grid 7</div>
        <div className="box">grid 8</div>
      </div>
    </div>
  );
};
