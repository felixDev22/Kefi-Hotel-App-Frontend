import React, { useState } from 'react';
import '../login/login.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="fluid">
      <div className="row">
        <div className="col-md-6 side-image"></div>
        <div className="col-md-6 right">
          <div className="input-box">
            <div className="intro">
              <span className="line"></span>
              <h4>Welcome to the ultimate hotel booking site:</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-filed">
                <input
                  type="text"
                  className="input"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="Name"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="input"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="input"
                  id="password"
                  required
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <button type="submit" className="submit">
                Sign-Up
              </button>
            </form>
            <div className="sign-in">
              <span
                dangerouslySetInnerHTML={{
                  __html: "If you have an account. <a href='./login'>Login</a>",
                }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
