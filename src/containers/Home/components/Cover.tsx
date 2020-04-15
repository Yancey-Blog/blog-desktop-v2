import React, { FC } from 'react'
import { ICover } from '../types'

interface Props {
  covers: ICover[]
}

const Cover: FC<Props> = ({ covers }) => {
  return <div>{covers[0]?.title}</div>
}

export default Cover
