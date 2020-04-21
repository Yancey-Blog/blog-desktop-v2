import React, { FC } from 'react'
import { ALI_OSS_URL } from 'src/shared/constants'
import { Header, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  return (
    <Header style={{ backgroundImage: `url(${ALI_OSS_URL}${imageUrl})` }}>
      <Title>{title}</Title>
    </Header>
  )
}

export default ImageHeader
