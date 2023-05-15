import React, {
  useState,
  useEffect
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  loginUser,
  selectLoginData,
  selectLoginLoading
} from '../../features/slices/auth/login';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStrings, setErrorStrings] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const loginData = useSelector(selectLoginData);

  const userToken = localStorage.getItem('token');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const validateInputFields = () => {
    const errors = [];
    if (!email) {
      errors.push('Email is required');
    }
    if (!password) {
      errors.push('Password is required');
    }

    setErrorStrings(errors);
    return errors.length === 0;
  };

  const loading = useSelector(selectLoginLoading);


  useEffect(() => {
    if (userToken) {
      // token exist so navigate user to home page
    } else {
      // token does not exist so navigate user to login page
      console.log('$loginData', loginData);
    }
  }, [userToken, loginData]);


  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorStrings('')

    const user = {
      email,
      password
    }

    if (validateInputFields()) {
      dispatch(loginUser({
        user,
      }));
    } else {
      console.log('errorStrings', errorStrings);
    }
  };

  return (
    <div className="fluid">
      <div className="row">
        <div className="col-md-6 side2-image">
          <h2 className="logo">KeFi</h2>
        </div>
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
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmail}
                />
              </div>

              <div className='input-filed'>
                <input
                  type = {
                    showPassword ? 'text' : 'password'
                  }
                  className="input"
                  id="password"
                  required
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
                <span onClick={handleTogglePasswordVisibility} className="input-icon">
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </span>
              </div>

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
                          <p>Login</p>
                      </button>
                    )
                }

            </form>
            <div className="sign-in">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    "Don't have an Account?. <a href='./signup'>Sign-Up</a>",
                }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
