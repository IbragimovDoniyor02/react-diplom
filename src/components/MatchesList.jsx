import React from 'react';

function MatchesList({ matches }) {
  return (
    <div>
      <h2>Расписание матчей</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.team1} vs {match.team2}
            <span>{match.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchesList;
