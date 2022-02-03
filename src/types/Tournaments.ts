export interface TournamentProps {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
}

export interface TournamentState {
  tournaments: TournamentProps[];
  isLoading: boolean;
  hasError: boolean;
}
