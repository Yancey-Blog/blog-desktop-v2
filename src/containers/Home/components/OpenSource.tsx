import React, { FC } from 'react'
import { IOpenSource } from '../types'

interface Props {
  openSources: IOpenSource[]
}

const OpenSource: FC<Props> = ({ openSources }) => {
  return <div>{openSources[0]?.title}</div>
}

export default OpenSource
