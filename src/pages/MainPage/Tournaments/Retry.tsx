import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';
import theme from '../../../theme';

function Retry() {
  return (
    <RetryContainer>
      <span>Something went wrong.</span>
      <Button>Retry</Button>
    </RetryContainer>
  );
}

export default Retry;

const RetryContainer = styled.div`
  display: grid;
  place-items: center;

  button {
    margin-top: ${theme.spacing(4)};
    width: min-content;
  }
`;
