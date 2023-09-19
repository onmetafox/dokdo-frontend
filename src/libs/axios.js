import axios from 'axios';
const api_path = "http://localhost:3001"
const Axios = axios.create({
  responseType: 'json',
  baseURL: `${api_path}/api`,
});

Axios.interceptors.request.use(function (options) {
//   const token = storage.get(tokenKey);
//   if (token) {
//     options.headers.authorization = 'Bearer ' + token;
//   } else {
//     options.headers.authorization = "";
//   }
  return options;
});

Axios.interceptors.response.use(response => response.data);

export default Axios;
