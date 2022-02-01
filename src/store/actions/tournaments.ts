import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../../constants/api';

// export const loadingError = bool => (
//   {
//     type: 'LOADING_ERROR',
//     hasErrored: bool
//   }
// )

// export const loadingInProgress = bool => (
//   {
//     type: 'LOADING_IN_PROGRESS',
//     isLoading: bool
//   }
// )

// export const loadingSuccess = repos => (
//   {
//     type: 'LOADING_SUCCESS',
//     repos
//   }
// )

// export const clearRepos = () => (
//   {
//     type: 'CLEAR_REPOS'
//   }
// )

// export const getRepos = username => {
//   return dispatch => {
//     dispatch(clearRepos())

//     dispatch(loadingError(false))

//     dispatch(loadingInProgress(true))

//     fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(response.statusText)
//         }

//         dispatch(loadingInProgress(false))

//         return response
//       })
//       .then((response) => response.json())
//       .then((repos) => dispatch(loadingSuccess(repos)))
//       .catch(() => dispatch(loadingError(true)))
//   }
// }

// export const getTournaments =()=>{
//   return dispatch => {
//     dispatch()
//   }
// }

const loadingState = (isLoading: boolean) => ({
  type: 'FETCHING_TOURNAMENTS',
  payload: {
    isLoading
  }
});

const fethError = (hasError: boolean) => ({
  type: 'FETCHING_ERROR',
  payload: {
    hasError
  }
});

export function getTournaments() {
  return async function(dispatch: Dispatch) {
    try {
      const request = await fetch(API_TOURNAMENTS_URL);
      const response = await request.json();
      console.log(response);
    } catch {
      dispatch(fethError(true));
    } finally {
      dispatch(loadingState(false));
    }
    // return fetchTournaments(q)
    //   .then(res => res.json())
    //   .then(
    //     (tournaments: Tournament[]) =>
    //       dispatch(getTournamentsSuccessAction(tournaments)),
    //     (error: Error) => dispatch(getTournamentsErrorAction(error))
    //   );
  };
}
