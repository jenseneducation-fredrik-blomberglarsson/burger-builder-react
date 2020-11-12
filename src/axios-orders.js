import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-585c0.firebaseio.com/'
});

export default instance;