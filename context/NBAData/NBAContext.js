import { createContext } from 'react';
const NBAContext = createContext();

export const NBAProvider = ({ children }) => {
  const nbaTeamsFull = [
    'Miami Heat',
    'Boston Celtics',
    'Milwaukee Bucks',
    'Philadelphia 76ers',
    'Toronto Raptors',
    'Chicago Bulls',
    'Brooklyn Nets',
    'Atlanta Hawks',
    'Cleveland Cavaliers',
    'Charlotte Hornets',
    'New York Knicks',
    'Washington Wizards',
    'Indiana Pacers',
    'Detroit Pistons',
    'Orlando Magic',
    'Phoenix Suns',
    'Memphis Grizzlies',
    'Golden State Warriors',
    'Dallas Mavericks',
    'Utah Jazz',
    'Denver Nuggets',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'Los Angeles Clippers',
    'San Antonio Spurs',
    'Los Angeles Lakers',
    'Sacramento Kings',
    'Portland Trail Blazers',
    'Oklahoma City Thunder',
    'Houston Rockets',
  ];

  return (
    <NBAContext.Provider
      value={{
        nbaTeamsFull,
      }}
    >
      {children}
    </NBAContext.Provider>
  );
};

export default NBAContext;
