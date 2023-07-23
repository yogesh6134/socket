import axios from 'axios';
import config from '@utils/apiUrl';
import {FAILURE} from '@utils/apiConstant';
import {store} from '@redux/configureStore';

// Create Instance
const AxiosInstance = axios.create({
  baseURL: config.API_URL,
  timeout: 20000,
  transformRequest: [
    function (data, headers) {
      const getStore = store.getState();
      const loginToken = getStore.loginReducer.userData?.data?.token;
      const signupToken = getStore.otpReducer.userData?.data?.token;
      if (loginToken) {
        headers['Authorization'] = `Bearer ${loginToken}`;
      }
      if (signupToken) {
        headers['Authorization'] = `Bearer ${signupToken}`;
      }
      if (data && data._parts) {
        return data;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
  headers: {'Content-Type': 'application/json'},
});

AxiosInstance.interceptors.request.use(configs => {
  return configs;
});

// Response Interceptor
AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!error.response) {
      return Promise.reject({
        status: FAILURE,
        message: 'Please check your internet connection',
      });
    } else {
      return error.response;
    }
  },
);

export default AxiosInstance;
