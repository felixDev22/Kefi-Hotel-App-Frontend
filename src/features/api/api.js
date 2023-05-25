// api.js

import axios from 'axios';

<<<<<<< HEAD
const BASE_URL = 'https://kefi-hotel-booking-app.onrender.com/api/v1/';
=======
const BASE_URL = 'https://kefi-hotel-booking-app.onrender.com/';
>>>>>>> 3c2e7fa8778a642be2f0ad84e822e078e375890b

export const registerUser = async (user) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/registrations`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/sessions`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/sessions/destroy`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkLoggedIn = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/sessions/is_logged_in`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
