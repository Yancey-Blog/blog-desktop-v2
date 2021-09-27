import { FC } from 'react'
import { ImageHeaderWrapper, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_STATIC_FILE_URL}${imageUrl}`

  return (
    <ImageHeaderWrapper>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imgUrl} alt={title} />
      }
      <Title>{title}</Title>
    </ImageHeaderWrapper>
  )
}

export default ImageHeader
