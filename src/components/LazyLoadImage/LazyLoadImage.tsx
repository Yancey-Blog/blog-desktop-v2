import { FC } from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import styled from 'styled-components'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { AliOSSSuffix } from 'src/shared/constants'

interface Props {
  isSupportWebp?: boolean
  imageUrl: string
  alt: string
}

export const Image = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;

  &.preview {
    filter: blur(0.4rem);
  }

  &.reveal {
    position: relative;
  }
`

const LazyLoadImage: FC<Props> = ({ imageUrl, alt }) => {
  const configClass = (loading: boolean) => {
    const previewClass = 'preview'
    const revealClass = 'reveal'
    return loading ? previewClass : revealClass
  }

  const { WEBP_SUFFIX, TINY_SUFFIX } = AliOSSSuffix
  return (
    <ProgressiveImage
      src={`${imageUrl}${generateAliOSSSuffix(WEBP_SUFFIX)}`}
      placeholder={`${imageUrl}${generateAliOSSSuffix(
        WEBP_SUFFIX,
        TINY_SUFFIX,
      )}`}
      delay={1000}
    >
      {(src: string, loading: boolean) => (
        <Image className={configClass(loading)} src={src} alt={alt} />
      )}
    </ProgressiveImage>
  )
}

export default LazyLoadImage
