import axios from 'axios';

const _createAxiosInterceptor = url => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      'Accept-Language': 'es'
    }
  });

  axiosCreate.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const baseServiceNoAuth = _createAxiosInterceptor(
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_REST_URL
);

export default baseServiceNoAuth;
