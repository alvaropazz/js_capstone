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

const API_KEY = '7i3ikDTXmldEyTz95yIC';
const BASE = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const saveScore = (name, score) => axios.post(`${BASE}/${API_KEY}/scores`, {
  user: name,
  score: score,
});

const getScores = () => axios.get(`${BASE}/${API_KEY}/scores`);

export { saveScore, getScores };