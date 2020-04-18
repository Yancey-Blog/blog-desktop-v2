export interface IPlayer {
  title: string
  artist: string
  lrc: string
  coverUrl: string
  musicFileUrl: string
}

export interface PlayerQuery {
  players: IPlayer[]
}
