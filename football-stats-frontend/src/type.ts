export interface TeamStats {
    goals: string;
    possession: string;
    passes: string;
    shots: string;
    shotsOnTarget: string;
    corners: string;
  }
  
  export interface MatchStats {
    matchId: string;
    date: string;
    stats: {
      teamA: TeamStats;
      teamB: TeamStats;
    };
  }