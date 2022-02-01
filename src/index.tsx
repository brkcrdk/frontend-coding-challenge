import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import { H4, Container } from './components';
import MainPage from './pages/MainPage';
import { getTournaments } from './store/actions/tournaments';

const App: React.FC = () => {
  const state = useSelector(s => s);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <MainPage />
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
