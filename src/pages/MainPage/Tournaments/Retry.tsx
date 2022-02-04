import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components';
import theme from 'theme';
import { RootState } from 'store/reducers';
import { getTournaments } from 'store/actions/tournaments';

function Retry() {
  const { searchQuery } = useSelector((s: RootState) => s.filterStore);
  const dispatch = useDispatch();

  const handleRetry = () => {
    dispatch(getTournaments(searchQuery));
  };
  return (
    <RetryContainer>
      <span>Something went wrong.</span>
      <Button onClick={handleRetry}>Retry</Button>
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
