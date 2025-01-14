import { MatchStats } from "../../type";

export const mockMatches: Record<string, MatchStats> = {
  "1": {
    matchId: "1",
    date: "03-05-2023",
    stats: {
      teamA: {
        
        goals: "1",
        possession: "50%",
        passes: "50",
        shots: "5",
        shotsOnTarget: "3",
        corners: "6",
      },
      teamB: {
       
        goals: "1",
        possession: "50%",
        passes: "50",
        shots: "5",
        shotsOnTarget: "3",
        corners: "6",
      },
    },
  },
  "2": {
    matchId: "2",
    date: "04-05-2023",
    stats: {
      teamA: {
       
        goals: "2",
        possession: "60%",
        passes: "200",
        shots: "10",
        shotsOnTarget: "5",
        corners: "4",
      },
      teamB: {
       
        goals: "1",
        possession: "40%",
        passes: "150",
        shots: "7",
        shotsOnTarget: "2",
        corners: "2",
      },
    },
  },
  "3": {
    matchId: "3",
    date: "05-05-2023",
    stats: {
      teamA: {
        
        goals: "3",
        possession: "65%",
        passes: "300",
        shots: "15",
        shotsOnTarget: "8",
        corners: "7",
      },
      teamB: {
        
        goals: "0",
        possession: "35%",
        passes: "100",
        shots: "3",
        shotsOnTarget: "1",
        corners: "1",
      },
    },
  },
  "4": {
    matchId: "4",
    date: "06-05-2023",
    stats: {
      teamA: {
        
        goals: "4",
        possession: "70%",
        passes: "250",
        shots: "12",
        shotsOnTarget: "9",
        corners: "5",
      },
      teamB: {
      
        goals: "1",
        possession: "30%",
        passes: "90",
        shots: "4",
        shotsOnTarget: "2",
        corners: "0",
      },
    },
  },
  "5": {
    matchId: "5",
    date: "07-05-2023",
    stats: {
      teamA: {
        goals: "2",
        possession: "55%",
        passes: "180",
        shots: "8",
        shotsOnTarget: "4",
        corners: "3"
      },
      teamB: {
          goals:"2", 
          possession:"45%", 
          passes:"150", 
          shots:"6", 
          shotsOnTarget:"3", 
          corners:"2"
      }
    }
  },
  "6": {
    matchId:"6", 
    date:"08-05-2023", 
    stats:{
      teamA:{
          goals:"1", 
          possession:"48%", 
          passes:"120", 
          shots:"7", 
          shotsOnTarget:"2", 
          corners:"1"
      }, 
      teamB:{ 
          goals:"1", 
          possession:"52%", 
          passes:"140", 
          shots:"8", 
          shotsOnTarget:"4", 
          corners:"3"
      }
   }
},
};
