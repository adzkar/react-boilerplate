import axios from 'axios';
import { getCookie } from '../utils/cookies';
// import { clearLocalStorage } from '../utils/localStorage';

function getTokenAuth() {
  if (getCookie('userData') !== '' && getCookie('userData') !== 'undefined') {
    return JSON.parse(getCookie('userData')).data.token.value;
  }
  return '';
}

const _createAxiosInterceptor = url => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getTokenAuth()}`
    }
  });

  axiosCreate.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      // if (error.response.status === 401) {
      //   setCookie('userData', '');
      //   window.location.replace('/');
      // }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseService = _createAxiosInterceptor(process.env.REACT_APP_REST_URL);

export default BaseService;
