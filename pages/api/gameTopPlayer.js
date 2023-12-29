import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://basketapi1.p.rapidapi.com/api/basketball/match/${query}/best-players`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_NBAAPIKEY,
          'X-RapidAPI-Host': process.env.REACT_APP_URL_HOST,
        },
      }
    );

    res.status(200).json(response.data.results);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Internal Server Error' });
  }
}
