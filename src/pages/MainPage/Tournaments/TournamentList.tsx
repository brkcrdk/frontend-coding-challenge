import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../../../theme';
import { TournamentState } from '../../../types/Tournaments';
import TournamentCard from './TournamentCard';

interface StateProps {
  tournamentsStore: TournamentState;
}

const TournamentList = () => {
  const { tournaments } = useSelector((s: StateProps) => s.tournamentsStore);

  const renderTournaments = (
    <CardList>
      {tournaments.map(tournament => (
        <TournamentCard />
      ))}
    </CardList>
  );

  return (
    <ListContainer>
      {tournaments?.length ? (
        renderTournaments
      ) : (
        <span>No tournaments found.</span>
      )}
    </ListContainer>
  );
};

export default TournamentList;

const ListContainer = styled.div`
  width: 100%;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(6)};
`;
