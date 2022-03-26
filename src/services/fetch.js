import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-socialnetwork-cmr.herokuapp.com/',
});