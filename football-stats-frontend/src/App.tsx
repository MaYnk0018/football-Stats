import React, { useState, useEffect } from 'react';
import { MatchStats } from './type';
import { getMatchStats } from './matchstats';
import StatsTable from './components/statsTable';
import './App.css';

function App() {
  const [matchId, setMatchId] = useState('1');
  const [stats, setStats] = useState<MatchStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMatchStats(id);
      setStats(data);
    } catch (err) {
      setError('Failed to fetch match statistics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats(matchId);
  }, [matchId]);

  return (
    <div className="App">
      <h1>XFF Match Statistics</h1>
      <div className="match-selector">
        <label htmlFor="matchId">Select Match ID: </label>
        <input
          type="text"
          id="matchId"
          value={matchId}
          onChange={(e) => setMatchId(e.target.value)}
        />
        <button onClick={() => fetchStats(matchId)}>
          Fetch Stats
        </button>
      </div>
      <StatsTable stats={stats} loading={loading} error={error} />
    </div>
  );
}

export default App;