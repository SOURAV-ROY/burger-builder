import axios from 'axios';

const instance = axios.create({

   baseURL: 'https://burger-banai.firebaseio.com/'
});

export default instance;
