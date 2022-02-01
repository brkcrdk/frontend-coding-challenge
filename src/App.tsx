import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { H4, Container } from './components';
import MainPage from './pages/MainPage';
import { getTournaments } from './store/actions/tournaments';
import { RootState } from './store/reducers';

type Props = {};

const App: React.FC = () => {
  const tournamentsStore = useSelector((s: RootState) => s.tournamentsStore);
  const { searchQuery } = useSelector((s: RootState) => s.filterStore);
  const dispatch = useDispatch();

  console.log({ searchQuery, tournamentsStore });

  useEffect(() => {
    dispatch(getTournaments(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <MainPage />
    </Container>
  );
};

export default App;
