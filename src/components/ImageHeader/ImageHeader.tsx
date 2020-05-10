import React, { FC } from 'react'
import { ALI_OSS_URL, ALI_OSS_SUFFIX } from 'src/shared/constants'
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
          ALI_OSS_SUFFIX.WEBP_SUFFIX,
        )}`}
        type="image/webp"
      />
      <img src={`${ALI_OSS_URL}${imageUrl}`} alt={title} />
      <Title>{title}</Title>
    </ImageHeaderWrapper>
  )
}

export default ImageHeader
