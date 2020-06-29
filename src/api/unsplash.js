import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID l8mbdke1-G1pkbQtnjJ424Ab6XJIGTrMCuHeBTMbrBY',
  },
});
