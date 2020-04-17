export interface SocialMedia {
  [x: string]: {
    url: string
    icon: string
  }
}

export interface SnackbarOrigin {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}
