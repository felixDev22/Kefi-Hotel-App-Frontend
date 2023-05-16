import axios from "axios";

const axiosInstance = axios.create({
 // Sign in endpoint: http://localhost:3000/users/sign_in
 // Sign Up endpoint: http://127.0.0.1:3000/api/v1/users

 baseURL: 'http://127.0.0.1:3000/api/v1/',
 headers: {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
 },
})

// Post Request
export const post = (url, data) => {
 // return axiosInstance.post(url, data);
 const response = axiosInstance.post(url, data);
 try {
  if (response.status === 200) {
   return response.data;
  }
  return response;
 } catch (error) {
  return error.response;
 }
};

// Get Request
export const get = async (url) => {
 const response = await axiosInstance.get(url);
 try {
  if (response.status === 200) {
   return response.data;
  }
  return response;
 } catch (error) {
  return error.response;
 }
};

// Put Request
export const put = async (url, data) => {
 try {
  const response = await axiosInstance.put(url, data);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};

// Delete Request
export const remove = async (url) => {
 try {
  const response = await axiosInstance.delete(url);
  if (response.status === 200) {
   return response.data;
  }
 } catch (error) {
  return error.response;
 }
};
