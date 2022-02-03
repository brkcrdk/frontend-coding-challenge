import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../../constants/api';
import { actionTypes } from '../../types/ActionTypes';
import { TournamentProps } from '../../types/Tournaments';

const setTournaments = (tournaments: TournamentProps[]) => ({
  type: actionTypes.SET_TOURNAMENTS,
  payload: {
    tournaments
  }
});

const loadingState = (isLoading: boolean) => ({
  type: actionTypes.FETCHING_LOADING,
  payload: {
    isLoading
  }
});

const fethError = (hasError: boolean) => ({
  type: actionTypes.FETCHING_ERROR,
  payload: {
    hasError
  }
});

export function getTournaments(q: string = '') {
  const computedQuery = q && `?q=${q}`;
  return async function(dispatch: Dispatch) {
    try {
      dispatch(loadingState(true));
      const request = await fetch(`${API_TOURNAMENTS_URL}${computedQuery}`);
      const response = await request.json();
      dispatch(setTournaments(response));
    } catch {
      dispatch(fethError(true));
    } finally {
      dispatch(loadingState(false));
    }
  };
}

export function addNewTournament(tournament: TournamentProps) {
  return function(dispatch: Dispatch) {
    dispatch({
      type: actionTypes.ADD_NEW_TOURNAMENT,
      payload: {
        tournament
      }
    });
  };
}

export function deleteTournamentAction(tournament: TournamentProps) {
  return function(dispatch: Dispatch) {
    dispatch({
      type: actionTypes.DELETE_TOURNAMENT,
      payload: {
        tournament
      }
    });
  };
}
