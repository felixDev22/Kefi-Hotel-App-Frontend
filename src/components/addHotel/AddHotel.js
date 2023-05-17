import React from 'react';
import '../../components/login/login.css';
import './addHotel.css';
import newpic from '../../Assets/sign.png';

const AddHotel = () => {
  return (
    <div className="wrapper-add">
      <div className="row">
        <div className="col-md-6">
          <div className="add-title">
            <h4>Add hotel:</h4>
          </div>
          <form>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="hotel name"
                required
                autoComplete="off"
                placeholder="Hotel Name:"
                value="Hotel Name"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="photo"
                required
                autoComplete="off"
                placeholder="Photo URL"
                value="Photo"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="rating"
                required
                autoComplete="off"
                placeholder="rating"
                value="rating"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="location"
                required
                autoComplete="off"
                placeholder="Location"
                value="Location"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="price"
                required
                autoComplete="off"
                placeholder="Price"
                value="Price"
              />
            </div>

            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="desc"
                required
                autoComplete="off"
                placeholder="Brief Intro:"
                value="Bio"
              />
            </div>

            <button type="submit" className="add-btn">
              <p>Add</p>
            </button>
          </form>
        </div>
        <div className="col-md-6 pic">
          <h4>New hotel:</h4>

          <div>
            <div className="new-hotel">
              <div className="new-hotel-pic">
                <img src={newpic} alt="Hotel" />
              </div>
              <h5>{hotel.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
