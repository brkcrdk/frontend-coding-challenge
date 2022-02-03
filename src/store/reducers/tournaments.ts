import { TournamentProps, TournamentState } from '../../types/Tournaments';
import { actionTypes } from '../../types/ActionTypes';

interface ActionProps {
  type: string;
  payload: {
    tournaments?: TournamentProps[];
    isLoading?: boolean;
    hasError?: boolean;
    tournament?: TournamentProps;
  };
}
const initialState = {
  tournaments: [],
  isLoading: true,
  hasError: false
};

export default function tournaments(
  state: TournamentState = initialState,
  action: ActionProps
) {
  switch (action.type) {
    case actionTypes.SET_TOURNAMENTS:
      return { ...state, tournaments: action.payload.tournaments };
    case actionTypes.FETCHING_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case actionTypes.FETCHING_ERROR:
      return { ...state, hasError: action.payload.hasError };
    case actionTypes.ADD_NEW_TOURNAMENT:
      const updatedState = [action.payload.tournament].concat(
        state.tournaments
      );
      return { ...state, tournaments: updatedState };
    case actionTypes.DELETE_TOURNAMENT:
      const filteredState = state.tournaments.filter(
        tournament => tournament.id !== action.payload.tournament?.id
      );
      return { ...state, tournaments: filteredState };
    default:
      return state;
  }
}
