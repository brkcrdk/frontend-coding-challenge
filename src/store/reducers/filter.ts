import { actionTypes } from 'types/ActionTypes';

interface FilterState {
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
  state: FilterState = initialState,
  action: ActionProps
) {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload.searchQuery };
    default:
      return state;
  }
}
