import React, { FC } from 'react'
import { ALI_OSS_URL, AliOSSSuffix } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { ImageHeaderWrapper, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  return (
    <ImageHeaderWrapper>
      <source
        srcSet={`${ALI_OSS_URL}${imageUrl}${generateAliOSSSuffix(
          AliOSSSuffix.WEBP_SUFFIX,
        )}`}
        type="image/webp"
      />
      <img src={`${ALI_OSS_URL}${imageUrl}`} alt={title} />
      <Title>{title}</Title>
    </ImageHeaderWrapper>
  )
}

export default ImageHeader
