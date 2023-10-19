import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MatchesList from '../components/MatchesList';
import useMatchesQuery from '../components/useMatchesQuery';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Main = styled.main`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function HomePage() {
  const { data: matches } = useMatchesQuery();

  return (
    <Router>
      <Container>
        <Header />

        <Main>
          <Title>Последние матчи</Title>
          <MatchesList matches={matches} />
        </Main>

        <Footer />

        <Button to="/football-data">Football Data</Button>
        <Button to="/match">Match</Button>
        <Button to="/players">Players</Button>
        <Button to="/statistics">Statistics</Button>
        <Button to="/login">Login</Button>
      </Container>
    </Router>
  );
}

export default HomePage;
