import React from 'react';
import '../../components/login/login.css';
import './addHotel.css';

const AddHotel = () => {
  return (
    <div className="fluid container-add">
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
                id="Location"
                required
                autoComplete="off"
                placeholder="Location:"
                value="Location"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="Photo"
                required
                autoComplete="off"
                placeholder="Photo:"
                value="Photo"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="Bio"
                required
                autoComplete="off"
                placeholder="Brief Intro:"
                value="Bio"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="Bio"
                required
                autoComplete="off"
                placeholder="Brief Intro:"
                value="Bio"
              />
            </div>
            <div className="input-filed">
              <input
                type="text"
                class="input"
                id="Price"
                required
                autoComplete="off"
                placeholder="Price"
                value="Price"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6 pic">
          <h4>New hotel:</h4>

          <div className="input-box">
            <div className="new-hotel card">
              <div className="new-hotel-pic">
                <image src="../../src/Assets/mombassa.png" />
              </div>
              <h3>Mombasa Raha </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
