import express from 'express';
import cors from 'cors';
import { mockMatches } from './data/mockData';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/getMatchStats', (req, res):void => {
  const { matchId } = req.query;
  
  if (!matchId) {
    res.status(400).json({ error: 'Match ID is required' });
    return
  }

  const match = mockMatches[matchId as string];
  
  if (!match) {
    res.status(404).json({ error: 'Match not found' });
    return
  }

  res.json(match);
  return
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});