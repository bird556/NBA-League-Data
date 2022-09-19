import axios from 'axios';

export const baseUrl = 'https://basketapi1.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NBAAPIKEY,
      'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com',
    },
  });
  return data;
};