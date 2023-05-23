import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/slices/auth/register';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Navigate } from 'react-router-dom';
import '../login/login.css';
import axios from 'axios';
import logo from '../../Assets/KefI-logo-white.png';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const errorStrings = useSelector((state) => state.register.errors);
  const iscreated = useSelector((state) => state.register.iscreated);
  console.log(iscreated);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://127.0.0.1:3000/signup',
        {
          user: {
            name :name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          console.log('Registration data', response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });
      dispatch(
        registerUser({
          user: {
            name: name,
            email: email,
            password: password,
          },
        }),
      );

  };
  return (
    <div className="fluid">
      <div className="row">
        <div className="col-md-6 side-image">
          <img src={logo} className="klogo" alt="logo"></img>
        </div>
        <div className="col-md-6 right">
          <div className="input-box">
            <div className="intro">
              <span className="line"></span>
              <h4>Welcome to the ultimate hotel booking site:</h4>
            </div>
            {errorStrings && <p> {errorStrings} </p>}
            {iscreated && <Navigate to="/login" />}
            <form onSubmit={handleSubmit}>
              <div className="input-filed">
                <input
                  type="text"
                  class="input"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-filed">
                <input
                  type="text"
                  class="input"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-filed">
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="input"
                    id="password"
                    required
                    autoComplete="off"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="see-password"
                    onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                  </span>
                </div>
              </div>
              <div className="input-filed">
              <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                  class="input"
                  id="confirm-password"
                  required
                  autoComplete="off"
                  placeholder="Confirm Password"
                  value={password_confirmation}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                  <span
                    className="see-password"
                    onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </span>
              </div>
              </div>
              <button type="submit" className="submit">
                <p>Signup</p>
              </button>
              {iscreated && <Navigate to="/login" replace={true} />}
            </form>
            <div className="sign-in">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    "Already have an Account?. <a href='./login'>Login</a>",
                }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}