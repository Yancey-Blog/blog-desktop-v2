import React, { FC } from 'react'
import Picture from 'src/components/Picture/Picture'
import { ImageHeaderWrapper, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_STATIC_FILE_URL}${imageUrl}`

  return (
    <ImageHeaderWrapper>
      <Picture src={imgUrl}>
        <img src={imgUrl} alt={title} />
        <Title>{title}</Title>
      </Picture>
    </ImageHeaderWrapper>
  )
}

export default ImageHeader
