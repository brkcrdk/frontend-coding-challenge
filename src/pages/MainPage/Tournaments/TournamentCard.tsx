import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { H6, Button } from '../../../components';
const TournamentCard = () => {
  return (
    <TournamentCardContainer>
      <H6>Test</H6>
      <span>Organizer: Test</span>
      <span>Game: Rocket League</span>
      <span>Participants: 134/256</span>
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
