import React, { useEffect, useState } from 'react';

function StatisticsPage() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.football-data.org/v4/competitions/SA/scorers', {
          headers: {
            'X-Auth-Token': 'e71f953349644f328247999d2453bba5'
          }
        });
        const data = await response.json();
        setStatistics(data.scorers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Статистика</h2>
      <ul>
        {statistics.map(item => (
          <li key={item.player.id}>
            <h3>{item.player.name}</h3>
            <p>{item.numberOfGoals}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatisticsPage;


