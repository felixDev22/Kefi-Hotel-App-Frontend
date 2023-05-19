import React from 'react';
import conference from '../../Assets/conference.png';
import './services.css';

export const Services = () => {
  return (
    <div className="service-wrapper">
      <div className="pic-wrapper">
        <div>
          <image src={conference} />
        </div>
        <div className="box">grid 1</div>
        <div className="box">grid 2</div>
        <div className="box">grid 3</div>
        <div className="box">grid 4</div>
        <div className="box">grid 5</div>
        <div className="box">grid 6</div>
      </div>
    </div>
  );
};
