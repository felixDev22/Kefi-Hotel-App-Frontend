import React, { useState } from 'react';
import './login.css';

export default function Login() {
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
        <div className="col-md-6 side2-image"></div>
        <div className="col-md-6 right">
          <div className="input-box">
            <div className="intro">
              <span className="line"></span>
              <h1>Welcome!</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-filed">
                <input
                  type="text"
                  className="input"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="input"
                  id="password"
                  required
                  autoComplete="off"
                  placeholder="password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <button type="submit" className="submit">
                Login
              </button>
            </form>
            <div className="sign-in">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    "If you don't have an account. <a href='./signup'>Sign-up</a>",
                }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
