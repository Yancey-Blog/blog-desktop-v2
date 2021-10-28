import { FC } from 'react'
import Image from 'next/image'
import { transImageExtensionName } from 'src/shared/utils'

type ImgElementStyle = NonNullable<JSX.IntrinsicElements['img']['style']>

export interface Props {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined
  objectFit?: ImgElementStyle['objectFit']
}

const LazyLoadImage: FC<Props> = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
}) => {
  return (
    <Image
      unoptimized
      layout={layout ?? 'fill'}
      width={width}
      height={height}
      placeholder="blur"
      src={transImageExtensionName(src)}
      alt={alt ?? ''}
      objectFit={objectFit ?? 'cover'}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMT0iYCQAEHwHCrSm2UwAAAABJRU5ErkJggg=="
    />
  )
}

export default LazyLoadImage
