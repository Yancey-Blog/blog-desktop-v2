import React, { FC, useContext } from 'react'
import WebpContext from './WebpContext'

export interface WebpProviderProps {
  children: React.ReactNode | React.ReactNode[] | null
}

export const WebpProvider: FC<WebpProviderProps> = ({ children }) => {
  const enableWebp = useContext(WebpContext)

  if (!children) {
    return null
  }

  return (
    <WebpContext.Provider value={enableWebp}>{children}</WebpContext.Provider>
  )
}
