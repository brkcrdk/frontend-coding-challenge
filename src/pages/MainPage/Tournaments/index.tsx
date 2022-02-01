import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { TournamentState } from '../../../types/Tournaments';
import theme from '../../../theme';

interface StateProps {
  tournamentsStore: TournamentState;
}

const Tournaments = () => {
  const { tournaments, hasError, isLoading } = useSelector(
    (s: StateProps) => s.tournamentsStore
  );

  return (
    <TournamentsContainer>
      {isLoading ? 'Loading tournaments..' : 'loaded'}
    </TournamentsContainer>
  );
};

export default Tournaments;

const TournamentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: ${theme.spacing(6)};
`;
