type GameTypes =
  | 'Counter-Strike: Global Offensive'
  | 'Dota 2'
  | 'Rocket League'
  | 'Battalion 1944'
  | 'League of Legends';

export interface TournamentProps {
  id: string;
  name: string;
  organizer: string;
  game: GameTypes;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
}
