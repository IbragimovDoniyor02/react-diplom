import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://api.football-data.org/v4/competitions/2003/matches', {
          headers: {
            'X-Unfold-Goals': 'true',
            'X-Auth-Token': 'e71f953349644f328247999d2453bba5'
          }
        });
        const data = response.data;
        setMatches(data.matches);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Football Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.homeTeam.name} vs {match.awayTeam.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballMatches;
