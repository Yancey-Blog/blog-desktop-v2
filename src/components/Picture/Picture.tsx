import { FC } from 'react'
import { AliOSSSuffix } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'

interface IPicture {
  src: string
}

const Picture: FC<IPicture> = ({ src, children }) => (
  <picture>
    <source
      srcSet={`${src}${generateAliOSSSuffix(AliOSSSuffix.WEBP_SUFFIX)}`}
      type="image/webp"
    />
    {children}
  </picture>
)

export default Picture
