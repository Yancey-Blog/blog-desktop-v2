import React, { FC } from 'react'
import { useEnableWebp } from 'src/hooks/useEnableWebp'
import { ALI_OSS_URL, ALI_OSS_SUFFIX } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { Header, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  const { enableWebp } = useEnableWebp()

  return (
    <Header
      imageUrl={
        enableWebp
          ? `${ALI_OSS_URL}${imageUrl}${generateAliOSSSuffix(
              ALI_OSS_SUFFIX.WEBP_SUFFIX,
            )}`
          : `${ALI_OSS_URL}${imageUrl}`
      }
    >
      <Title>{title}</Title>
    </Header>
  )
}

export default ImageHeader
