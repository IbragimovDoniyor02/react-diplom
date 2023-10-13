import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MatchesList from '../components/MatchesList';
import useMatchesQuery from '../components/useMatchesQuery';

function HomePage() {
  const { data: matches } = useMatchesQuery();

  return (
    <div>
      <Header />

      <main>
        <h2>Последние матчи</h2>
        <MatchesList matches={matches} />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;


