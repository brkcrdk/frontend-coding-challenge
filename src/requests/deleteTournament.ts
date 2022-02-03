import { API_TOURNAMENTS_URL } from '../constants/api';

const deleteTournament = async (tournamentId: string) => {
  try {
    const request = await fetch(`${API_TOURNAMENTS_URL}/${tournamentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await request.json();
  } catch (err) {
    console.log(err);
  }
};

export default deleteTournament;
