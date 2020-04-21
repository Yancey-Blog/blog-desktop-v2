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

export interface IBestAlbum {
  readonly _id: string
  readonly title: string
  readonly artist: string
  readonly coverUrl: string
  readonly mvUrl: string
  readonly releaseDate: string
  readonly createdAt: string
  readonly updatedAt: string
}

export interface BestAlbumQuery {
  getBestAlbums: IBestAlbum[]
}

export interface ILiveTour {
  _id: string
  title: string
  showTime: string
  posterUrl: string
  createdAt: string
  updatedAt: string
}

export interface LiveTourQuery {
  getLiveTours: ILiveTour[]
}

export interface IYanceyMusic {
  readonly _id: string
  readonly title: string
  readonly soundCloudUrl: string
  readonly posterUrl: string
  readonly releaseDate: string
  readonly createdAt: string
  readonly updatedAt: string
}

export interface YanceyMusicQuery {
  getYanceyMusic: IYanceyMusic[]
}
