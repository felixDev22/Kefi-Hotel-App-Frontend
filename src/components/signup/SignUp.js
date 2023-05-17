import React, { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../features/slices/auth/register';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Navigate } from "react-router-dom";
import '../login/login.css';

export default function register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const errorStrings = useSelector(state => state.register.errors)
  const iscreated = useSelector(state => state.register.iscreated)
  console.log(iscreated)
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirmation
    };
      dispatch(registerUser({
        user,
      }));
    
  }


  return (
    <div className="fluid">
      <div className="row">
        <div className="col-md-6 side-image">
          <h2 className="logo">KeFi</h2>
        </div>
        <div className="col-md-6 right">
          <div className="input-box">
            <div className="intro">
              <span className="line"></span>
              <h4>Welcome to the ultimate hotel booking site:</h4>
            </div>
           {errorStrings && <p> {errorStrings} </p> }
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
                  className="input-icon"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </span>
              </div>

              <div>
                <input
                  type="text"
                  class="input"
                  id="confirm-password"
                  required
                  autoComplete="off"
                  placeholder="Confirm Password"
                  value = {
                    password_confirmation
                  }
                  onChange = {
                      (e) => setConfirmPassword(e.target.value)
                  }
                />
              </div>
                    <button type="submit" className="submit">
                          <p>Signup</p>
                      </button>
            </form>
            <div className="sign-in">
              <span
                dangerouslySetInnerHTML={{
                  __html: "Already have an Account?. <a href='./login'>Login</a>",
                }}></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
