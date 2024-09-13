import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;
  console.log('COMING FROM Search.js API ', query);
  try {
    const response = await axios.get(
      `https://basketapi1.p.rapidapi.com/api/basketball/search/${query}`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_NBAAPIKEY,
          'X-RapidAPI-Host': process.env.REACT_APP_URL_HOST,
        },
      }
    );
    // console.log(response.data.results);
    res.status(200).json(response.data.results);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal Server Error' });
  }
}
