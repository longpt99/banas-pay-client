import axios from 'axios';
import queryString from 'query-string';
import { fetchToken } from './token';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use((config) => {
  const isToken = fetchToken();
  const act = config.url.split('/').pop();

  if (['register', 'refresh-token'].includes(act)) {
    return config;
  }
  config.headers.Authorization = isToken
    ? 'Bearer ' + isToken.token.accessToken
    : 'Basic 4f0235d3-3acd-470c-a8f2-714af51fe80a';
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    debugger;
    console.log(error.response.data);
    const originalReq = error.config;
    if (
      error?.response.data.message === 'jwt expired' &&
      error.config.url.includes('register')
    ) {
      return window.location.replace('/register');
    }
    if (error?.response.data.message === 'jwt expired') {
      originalReq._retry = true;
      const { token } = fetchToken();
      return axiosInstance
        .post(
          '/auth/refresh-token',
          {},
          {
            headers: {
              Authorization: `Bearer ${token.refreshToken}`,
            },
          }
        )
        .then((res) => {
          localStorage.setItem('token', JSON.stringify(res.data));
          return axiosInstance(originalReq);
        });
    }
    debugger;

    if (
      ['jwt malformed', 'refresh jwt expired'].includes(
        error?.response.data.message
      )
    ) {
      localStorage.removeItem('token');
      return window.location.replace('/login');
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
