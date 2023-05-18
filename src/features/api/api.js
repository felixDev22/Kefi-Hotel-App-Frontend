// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/';

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/registrations`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/sessions`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/sessions/destroy`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkLoggedIn = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sessions/is_logged_in`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
