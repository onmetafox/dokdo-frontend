import axios from 'axios';
const api_path = "https://dokdo.sh"
const Axios = axios.create({
  responseType: 'json',
  baseURL: `${api_path}/api`,
});

Axios.interceptors.request.use(function (options) {
  return options;
});

Axios.interceptors.response.use(response => response.data);

export default Axios;
