import { TournamentProps, TournamentState } from '../../types/Tournaments';
import { actionTypes } from '../../types/ActionTypes';

interface ActionProps {
  type: string;
  payload: {
    tournaments?: TournamentProps[];
    isLoading?: boolean;
    hasError?: boolean;
    tournament?: TournamentProps;
    newName?: string;
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
    case actionTypes.UPDATE_TOURNAMENT:
      const updateState = state.tournaments.map(tournament => {
        if (tournament.id === action.payload.tournament?.id) {
          return { ...tournament, name: action.payload.newName };
        }
        return tournament;
      });
      return { ...state, tournaments: updateState };
    default:
      return state;
  }
}
