import { TournamentProps } from '../../types/Tournaments';

interface StateProps {
  tournaments: TournamentProps[];
  isLoading: boolean;
  hasError: boolean;
}

interface ActionProps {
  type: string;
  payload: {
    isLoading?: boolean;
    hasError?: boolean;
  };
}
const initialState = {
  tournaments: [],
  isLoading: true,
  hasError: false
};

export default function tournaments(
  state: StateProps = initialState,
  action: ActionProps
) {
  switch (action.type) {
    case 'FETCHING_TOURNAMENTS':
      return { ...state, isLoading: action.payload.isLoading };
    case 'FETCHING_ERROR':
      return { ...state, hasError: action.payload.hasError };
    default:
      return state;
  }
}
