import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Users, Target, CornerUpRight } from 'lucide-react';
import { MatchStats } from '../type';

interface StatsTableProps {
  stats: MatchStats | null;
  loading: boolean;
  error: string | null;
}

// Stat row component for better organization
const StatRow = ({ 
  label, 
  teamAValue, 
  teamBValue, 
  icon: Icon 
}: { 
  label: string; 
  teamAValue: string; 
  teamBValue: string; 
  icon: React.ElementType;
}) => {
  const teamANum = parseFloat(teamAValue);
  const teamBNum = parseFloat(teamBValue);
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="p-4 border-b flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-500" />
        {label}
      </td>
      <td className={`p-4 border-b text-center ${teamANum > teamBNum ? 'font-bold text-green-600' : ''}`}>
        {teamAValue}
      </td>
      <td className={`p-4 border-b text-center ${teamBNum > teamANum ? 'font-bold text-green-600' : ''}`}>
        {teamBValue}
      </td>
    </tr>
  );
};

const StatsTable: React.FC<StatsTableProps> = ({ stats, loading, error }) => {
  if (loading) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8 flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="text-red-500 text-center flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!stats) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="text-gray-500 text-center">No statistics available</div>
        </CardContent>
      </Card>
    );
  }

  const getMatchResult = () => {
    const teamAGoals = parseInt(stats.stats.teamA.goals);
    const teamBGoals = parseInt(stats.stats.teamB.goals);
    if (teamAGoals > teamBGoals) return "Team A Victory";
    if (teamBGoals > teamAGoals) return "Team B Victory";
    return "Draw";
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">
            Match Statistics
          </CardTitle>
          <Badge variant="secondary" className="text-sm">
            {stats.date}
          </Badge>
        </div>
        <div className="mt-2">
          <Badge variant="outline" className="text-sm">
            {getMatchResult()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left border-b font-medium text-gray-600">Metric</th>
                <th className="p-4 text-center border-b font-medium text-gray-600">Team A</th>
                <th className="p-4 text-center border-b font-medium text-gray-600">Team B</th>
              </tr>
            </thead>
            <tbody>
              <StatRow 
                label="Goals" 
                teamAValue={stats.stats.teamA.goals} 
                teamBValue={stats.stats.teamB.goals}
                icon={Trophy}
              />
              <StatRow 
                label="Possession" 
                teamAValue={stats.stats.teamA.possession} 
                teamBValue={stats.stats.teamB.possession}
                icon={Users}
              />
              <StatRow 
                label="Total Passes" 
                teamAValue={stats.stats.teamA.passes} 
                teamBValue={stats.stats.teamB.passes}
                icon={Users}
              />
              <StatRow 
                label="Shots" 
                teamAValue={stats.stats.teamA.shots} 
                teamBValue={stats.stats.teamB.shots}
                icon={Target}
              />
              <StatRow 
                label="Shots on Target" 
                teamAValue={stats.stats.teamA.shotsOnTarget} 
                teamBValue={stats.stats.teamB.shotsOnTarget}
                icon={Target}
              />
              <StatRow 
                label="Corners" 
                teamAValue={stats.stats.teamA.corners} 
                teamBValue={stats.stats.teamB.corners}
                icon={CornerUpRight}
              />
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsTable;