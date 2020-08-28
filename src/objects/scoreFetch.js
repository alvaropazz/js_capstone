// import Axios from 'axios';
const axios = require('axios');

// async function key() {
//   const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
//           {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: "Forest Man",
//           })});
//   const json = await response.json();
//   return json;
// }
// key().then(data=> console.log(data))

const API_KEY = 'YW3bviuS48OTujqz6y9m';
const BASE = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

function save(name, score) {
  console.log(name, score);
  const data = new FormData();
  data.append('user', name);
  data.append('score', score);

  console.log(axios.post(`${BASE}/${API_KEY}/scores`, {
    user: name,
    score,
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
    }));
}

const get = () => axios.get(`${BASE}/${API_KEY}/scores`);

export { save, get };