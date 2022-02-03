import { API_TOURNAMENTS_URL } from '../constants/api';

const fetcher = async (customUrl: string, customOptions?: RequestInit) => {
  const request = await fetch(`${API_TOURNAMENTS_URL}${customUrl}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...customOptions
  });
  return await request.json();
};

export default fetcher;
