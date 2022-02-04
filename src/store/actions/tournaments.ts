import { Dispatch } from 'redux';
import { actionTypes } from 'types/ActionTypes';
import { TournamentProps } from 'types/Tournaments';
import { fetcher } from 'utils';

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
      const response: TournamentProps[] = await fetcher(computedQuery);
      dispatch(setTournaments(response));
      dispatch(fethError(false));
    } catch {
      dispatch(fethError(true));
    } finally {
      dispatch(loadingState(false));
    }
  };
}

export function addNewTournament(tournamentName: string) {
  return async function(dispatch: Dispatch) {
    const tournament = await fetcher('', {
      method: 'POST',
      body: JSON.stringify({ name: tournamentName })
    });
    dispatch({
      type: actionTypes.ADD_NEW_TOURNAMENT,
      payload: {
        tournament
      }
    });
  };
}

export function deleteTournament(tournament: TournamentProps) {
  return async function(dispatch: Dispatch) {
    await fetcher(`/${tournament.id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: actionTypes.DELETE_TOURNAMENT,
      payload: {
        tournament
      }
    });
  };
}

export function updateTournament(tournament: TournamentProps, newName: string) {
  return async function(dispatch: Dispatch) {
    await fetcher(`/${tournament.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ name: newName })
    });
    dispatch({
      type: actionTypes.UPDATE_TOURNAMENT,
      payload: {
        tournament,
        newName
      }
    });
  };
}
