import { useState, useEffect } from 'react';

function useMatchesQuery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к API или получить данные из другого источника
    // и установить полученные данные в состояние

    // Пример получения данных из API
    fetch('https://api.example.com/matches')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return { data };
}

export default useMatchesQuery;
