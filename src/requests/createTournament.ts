import { API_TOURNAMENTS_URL } from '../constants/api';

const createTournament = async (name: string) => {
  try {
    const request = await fetch(API_TOURNAMENTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    return await request.json();
  } catch (err) {
    console.log(err);
  }
};

export default createTournament;
