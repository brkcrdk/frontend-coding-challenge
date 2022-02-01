import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { H6, Button } from '../../../components';
import { TournamentProps } from '../../../types/Tournaments';
interface TournamentCardProps {
  tournamentInfo: TournamentProps;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournamentInfo }) => {
  const { name, organizer, game, participants } = tournamentInfo;

  return (
    <TournamentCardContainer>
      <H6>{name}</H6>
      <span>Organizer: {organizer}</span>
      <span>Game: {game}</span>
      <span>
        Participants: {participants.current}/{participants.max}
      </span>
      <span>Start: 27/02/2020, 12:50:33</span>
      <TournamentControllers>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </TournamentControllers>
    </TournamentCardContainer>
  );
};

export default TournamentCard;

const TournamentCardContainer = styled.article`
  display: grid;
  background: ${theme.palette.background.base};
  border-radius: ${theme.spacing(1)};
  padding: ${theme.spacing(4)};
`;

const TournamentControllers = styled.footer`
  margin-top: ${theme.spacing(2)};
  button {
    &:first-of-type {
      margin-right: ${theme.spacing(2)};
    }
  }
`;
