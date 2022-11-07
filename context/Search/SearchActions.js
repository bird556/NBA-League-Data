import axios from 'axios';
const NBA_URL = process.env.REACT_APP_URL_HOST;
const NBA_KEY = process.env.REACT_APP_NBAAPIKEY;
const NBA_BASE_URL = process.env.REACT_APP_BASEURL;
const nbaSearch = axios.create({
  //Coming From searchActions ✅

  baseURL: NBA_BASE_URL,
  // baseURL: 'https://basketapi1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': NBA_KEY,
    'X-RapidAPI-Host': NBA_URL,
  },
});

// Get search results
export const searchUsers = async (name) => {
  try {
    const response = await nbaSearch.get(`/api/basketball/search/${name}`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
