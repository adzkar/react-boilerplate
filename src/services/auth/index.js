import BaseService from '../baseServices';
import { URL } from '../../config/rest';
import { getCookie, setCookie } from '../../utils/cookies';
import { clearLocalStorage } from '../../utils/localStorage';

function getTokenAuth() {
  if (getCookie('userData') !== '') {
    return JSON.parse(getCookie('userData')).data.token.value;
  }
  return '';
}
function getUserId() {
  if (getCookie('userData') !== '') {
    return JSON.parse(getCookie('userData')).data.user.id;
  }
  return '';
}
//is user is logged in
function isUserAuthenticated() {
  return getTokenAuth() !== '';
}

function Login(body) {
  return BaseService.post(URL.LOGIN, body);
}

async function Logout() {
  try {
    setCookie('userData', '');
    clearLocalStorage();
    return 1;
  } catch (error) {
    return error;
  }
}

export default {
  Login,
  Logout,
  isUserAuthenticated,
  getTokenAuth,
  getUserId
};
