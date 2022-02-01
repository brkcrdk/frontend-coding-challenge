import { TournamentProps } from '../../types/Tournaments';

interface StateProps {
  tournaments: TournamentProps[];
  isLoading: boolean;
}

interface ActionProps {
  type: string;
}
const initialState = {
  tournaments: [],
  isLoading: false
};

export default function tournaments(
  state: StateProps = initialState,
  action: ActionProps
) {
  switch (action.type) {
    default:
      return state;
  }
}
