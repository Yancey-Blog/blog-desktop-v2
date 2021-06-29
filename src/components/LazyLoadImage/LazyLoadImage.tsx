import { FC } from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import styled from 'styled-components'
import {
  progressiveReveal,
  progressiveRevealStatic,
} from 'src/styled/animations'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { AliOSSSuffix } from 'src/shared/constants'

interface Props {
  isSupportWebp?: boolean
  imageUrl: string
  alt: string
  noAnimation?: boolean
}

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.preview {
    filter: blur(2vw);
    transform: scale(1.05);
  }

  &.reveal {
    position: relative;
    animation: ${progressiveReveal} 600ms linear;
  }

  &.preview-static {
    filter: blur(0.4rem);
    position: relative;
  }

  &.reveal-static {
    position: relative;
    animation: ${progressiveRevealStatic} 600ms linear;
  }
`

const LazyLoadImage: FC<Props> = ({ imageUrl, alt, noAnimation }) => {
  const configClass = (loading: boolean) => {
    const previewClass = `preview${noAnimation ? '-static' : ''}`
    const revealClass = `reveal${noAnimation ? '-static' : ''}`
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
