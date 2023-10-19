import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompetitions } from './actions';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const CompetitionName = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CompetitionInfo = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

const FootballDataPage = () => {
  const dispatch = useDispatch();
  const competitions = useSelector(state => state.competitions);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <Container>
      <Title>Football Competitions</Title>
      <List>
        {competitions.map(competition => (
          <ListItem key={competition.id}>
            <CompetitionName>{competition.name}</CompetitionName>
            <CompetitionInfo>Code: {competition.code}</CompetitionInfo>
            <CompetitionInfo>Type: {competition.type}</CompetitionInfo>
            <CompetitionInfo>Plan: {competition.plan}</CompetitionInfo>
            <CompetitionInfo>Last Updated: {competition.lastUpdated}</CompetitionInfo>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FootballDataPage;
