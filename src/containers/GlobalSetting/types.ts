export interface IGlobalSetting {
  releasePostId: string
  cvPostId: string
  isGrayTheme: boolean
}

export interface GlobalSettingQuery {
  getGlobalSetting: IGlobalSetting
}
