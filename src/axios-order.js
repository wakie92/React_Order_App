import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://order-app-7e078.firebaseio.com/'
});

export default instance;