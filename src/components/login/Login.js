import React, { useState } from 'react';

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
    <div class="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <img src="../../Assets/Sign pic.jpg" alt="hotel" />
          </div>

          <div className="col-md-6 right">
            <div className="input-box">
              <h1>Welcome back !</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-filed">
                  <input
                    type="text"
                    class="input"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="email"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="text"
                    class="input"
                    id="password"
                    required
                    autoComplete="off"
                    placeholder="password"
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
                <button type="submit">Login</button>
              </form>
              <div className="sign-in">
                <span>
                  If you donU+2019t have an account.
                  <a href="./Login">Sign-up</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
