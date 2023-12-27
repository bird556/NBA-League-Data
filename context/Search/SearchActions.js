import axios from 'axios';
const NBA_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_URL_BASE_HOST;
console.log('NBA_BASE_URL:', NBA_BASE_URL);
const nbaSearch = axios.create({
  //Coming From searchActions ✅ do not need anymore

  baseURL: NBA_BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_NBAAPIKEY,
    'X-RapidAPI-Host': process.env.REACT_APP_URL_HOST,
  },
});

// Get search results
export const searchUsers = async (name) => {
  try {
    const response = await nbaSearch.get(`/api/basketball/search/${name}`);
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
