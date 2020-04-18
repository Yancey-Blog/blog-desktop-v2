import React, { FC, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import { scrollToTop, noop } from 'src/shared/tools'
import { Cat } from './styled'

const BackToTop: FC = () => {
  const [showCat, setShowCat] = useState('')

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        const top =
          document.documentElement.scrollTop || document.body.scrollTop
        if (top > 100) {
          setShowCat('showCat')
        } else {
          setShowCat('')
        }
      }, 150),
    )

    return () => {
      window.removeEventListener('scroll', noop)
    }
  }, [])
  return <Cat onClick={scrollToTop} className={showCat} />
}

export default BackToTop
