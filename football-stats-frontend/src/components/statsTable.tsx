import React from 'react';
import { MatchStats } from '../type';

interface StatsTableProps {
  stats: MatchStats | null;
  loading: boolean;
  error: string | null;
}

const StatsTable: React.FC<StatsTableProps> = ({ stats, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!stats) return <div>No stats available</div>;

  return (
    <div className="stats-table">
      <h2>Match Statistics - {stats.date}</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Team A</th>
            <th>Team B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goals</td>
            <td>{stats.stats.teamA.goals}</td>
            <td>{stats.stats.teamB.goals}</td>
          </tr>
          <tr>
            <td>Possession</td>
            <td>{stats.stats.teamA.possession}</td>
            <td>{stats.stats.teamB.possession}</td>
          </tr>
          <tr>
            <td>Total Passes</td>
            <td>{stats.stats.teamA.passes}</td>
            <td>{stats.stats.teamB.passes}</td>
          </tr>
          <tr>
            <td>Shots</td>
            <td>{stats.stats.teamA.shots}</td>
            <td>{stats.stats.teamB.shots}</td>
          </tr>
          <tr>
            <td>Shots on Target</td>
            <td>{stats.stats.teamA.shotsOnTarget}</td>
            <td>{stats.stats.teamB.shotsOnTarget}</td>
          </tr>
          <tr>
            <td>Corners</td>
            <td>{stats.stats.teamA.corners}</td>
            <td>{stats.stats.teamB.corners}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;