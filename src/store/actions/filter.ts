import { Dispatch } from 'redux';
import { actionTypes } from 'types/ActionTypes';

export function updateFilter(searchQuery: string) {
  return function(dispatch: Dispatch) {
    dispatch({
      type: actionTypes.UPDATE_SEARCH_QUERY,
      payload: {
        searchQuery
      }
    });
  };
}
