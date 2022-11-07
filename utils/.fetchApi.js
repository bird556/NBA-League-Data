import axios from 'axios';

export const baseUrl = 'https://basketapi1.p.rapidapi.com';
export const apiKey = process.env.NEXT_PUBLIC_REACT_APP_NBAAPIKEY;
export const apiHost = process.env.NEXT_PUBLIC_REACT_APP_URL_HOST;
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      //Coming From UTILS ✅
      'X-RapidAPI-Key': process.env.REACT_APP_NBAAPIKEY,
      'X-RapidAPI-Host': process.env.REACT_APP_URL_HOST,
    },
  });
  return data;
};
