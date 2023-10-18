import { useState, useEffect } from 'react';

function useMatchesQuery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/matches')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return { data };
}

export default useMatchesQuery;
