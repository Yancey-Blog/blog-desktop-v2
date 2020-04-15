import React, { FC } from 'react'
import { IMotto } from '../types'

interface Props {
  mottos: IMotto[]
}

const Motto: FC<Props> = ({ mottos }) => {
  return <div>{mottos[0]?.content}</div>
}

export default Motto
