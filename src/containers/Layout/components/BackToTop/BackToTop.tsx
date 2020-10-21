import { FC } from 'react'
import { scrollToTop } from 'src/shared/utils'
import { Cat } from './styled'

interface Props {
  isShowCat: boolean
}

const BackToTop: FC<Props> = ({ isShowCat }) => (
  <Cat onClick={scrollToTop} className={isShowCat ? 'showCat' : ''} />
)

export default BackToTop
