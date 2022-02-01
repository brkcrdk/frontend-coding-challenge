import { actionTypes } from '../../types/ActionTypes';

interface StateProps {
  searchQuery: string;
}

interface ActionProps {
  type: string;
  payload: {
    searchQuery: string;
  };
}
const initialState = {
  searchQuery: ''
};

export default function filter(
  state: StateProps = initialState,
  action: ActionProps
) {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload.searchQuery };
    default:
      return state;
  }
}
