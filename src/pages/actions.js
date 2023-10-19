
export const fetchCompetitions = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://api.football-data.org/v4/competitions/', {
          headers: {
            'X-Auth-Token': 'e71f953349644f328247999d2453bba5'
          }
        });
        const data = await response.json();
        dispatch({ type: 'FETCH_COMPETITIONS_SUCCESS', payload: data.competitions });
      } catch (error) {
        dispatch({ type: 'FETCH_COMPETITIONS_FAILURE', payload: error.message });
      }
    };
  };
  