import axios from 'axios';
import { MatchStats } from './type';

const API_BASE_URL = 'http://localhost:3001';

export const getMatchStats = async (matchId: string): Promise<MatchStats> => {
  const response = await axios.get(`${API_BASE_URL}/api/getMatchStats`, {
    params: { matchId }
  });
  return response.data as MatchStats;
};
