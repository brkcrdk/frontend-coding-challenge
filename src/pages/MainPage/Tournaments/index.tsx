import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from 'theme';
import { TournamentState } from 'types/Tournaments';
import TournamentList from './TournamentList';
import Retry from './Retry';
interface StateProps {
  tournamentsStore: TournamentState;
}

const Tournaments = () => {
  const { hasError, isLoading } = useSelector(
    (s: StateProps) => s.tournamentsStore
  );

  const renderTournaments = hasError ? <Retry /> : <TournamentList />;

  return (
    <TournamentsContainer>
      {isLoading ? <span>Loading tournaments..</span> : renderTournaments}
    </TournamentsContainer>
  );
};

export default Tournaments;

const TournamentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing(6)};
`;
