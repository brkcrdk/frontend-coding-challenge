import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import theme from 'theme';
import { TournamentState, TournamentProps } from 'types/Tournaments';
import { deleteTournament, updateTournament } from 'store/actions/tournaments';
import TournamentCard from './TournamentCard';

interface StateProps {
  tournamentsStore: TournamentState;
}

const TournamentList = () => {
  const { tournaments } = useSelector((s: StateProps) => s.tournamentsStore);
  const dispatch = useDispatch();

  const handleDeleteTournament = (selectedTournament: TournamentProps) => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      dispatch(deleteTournament(selectedTournament));
    }
  };

  const handleUpdateTournament = (selectedTournament: TournamentProps) => {
    const newName = prompt('New Tournament Name:', selectedTournament.name);
    if (newName) {
      dispatch(updateTournament(selectedTournament, newName));
    }
  };

  const renderTournaments = (
    <CardList>
      {tournaments.map(tournament => (
        <TournamentCard
          tournamentInfo={tournament}
          key={tournament.id}
          onDelete={() => handleDeleteTournament(tournament)}
          onEdit={() => handleUpdateTournament(tournament)}
        />
      ))}
    </CardList>
  );

  return (
    <ListContainer>
      {tournaments?.length ? (
        renderTournaments
      ) : (
        <span className="noTournament">No tournaments found.</span>
      )}
    </ListContainer>
  );
};

export default TournamentList;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  .noTournament {
    text-align: center;
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(6)};
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
