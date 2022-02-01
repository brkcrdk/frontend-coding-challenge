import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import { H4, Container } from './components';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  const state = useSelector(s => s);
  console.log(state);
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
