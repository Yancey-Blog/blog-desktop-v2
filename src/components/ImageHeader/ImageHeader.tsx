import React, { FC } from 'react'
import Picture from 'src/components/Picture/Picture'
import { ALI_OSS_URL } from 'src/shared/constants'
import { ImageHeaderWrapper, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  return (
    <ImageHeaderWrapper>
      <Picture src={`${ALI_OSS_URL}${imageUrl}`}>
        <img src={`${ALI_OSS_URL}${imageUrl}`} alt={title} />
        <Title>{title}</Title>
      </Picture>
    </ImageHeaderWrapper>
  )
}

export default ImageHeader
