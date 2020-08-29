const axios = require('axios');

const API_KEY = 'YW3bviuS48OTujqz6y9m';
const BASE = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const save = (name, score) => {
  axios.post(`${BASE}/${API_KEY}/scores`, {
    user: name,
    score,
  });
}

const get = () => axios.get(`${BASE}/${API_KEY}/scores`);

export { save, get };