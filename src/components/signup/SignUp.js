import React, {
  useState,
  useEffect
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  registerUser,
  selectRegisterData,
  selectRegisterLoading
} from '../../features/slices/auth/register';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import '../login/login.css';

export default function register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [errorStrings, setErrorStrings] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(selectRegisterLoading);
  const registerData = useSelector(selectRegisterData);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const validateInputFields = () => {
    const errors = [];
    if (!name) {
      errors.push('Name is required');
    }
    if (!email) {
      errors.push('Email is required');
    }
    if (!password) {
      errors.push('Password is required');
    }
    if (!password_confirmation) {
      errors.push('Confirm Password is required');
    }
    if (password !== password_confirmation) {
      errors.push('Password and Confirm Password must be same');
    }

    setErrorStrings(errors);
    return errors.length === 0;
  };

  const userToken = localStorage.getItem('token');

  useEffect(() => {
    if (userToken) {
      // token exist so navigate user to home page
    } else {
      // token does not exist so navigate user to login page
      console.log('$registerData', registerData);
    }
  }, [userToken, registerData]);


  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorStrings('')

    const user = {
      name,
      email,
      password,
      password_confirmation
    };

    if (validateInputFields()) {
      dispatch(registerUser({
        user,
      }));
    } else {
      console.log('error', errorStrings);
    }
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

              {/* <button type="submit" className="submit">
                Sign-Up
              </button> */}

              {
                  errorStrings && errorStrings.length > 0 && (
                    <div className="error">
                      <ul>
                        {
                          errorStrings.map((error) => (
                            <li key={error}>{error}</li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }

                {
                  loading ? (
                    <button type="submit" className="submit" disabled>
                          <p>Loading...</p>
                    </button>
                  ) : (
                    <button type="submit" className="submit">
                          <p>Signup</p>
                      </button>
                    )
                }
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
