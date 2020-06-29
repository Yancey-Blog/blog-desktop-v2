import React, { FC, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import { scrollToTop } from 'src/shared/utils'
import { Cat } from './styled'

const BackToTop: FC = () => {
  const [showCat, setShowCat] = useState('')

  const scrollToTopHander = throttle(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    if (top > 800) {
      setShowCat('showCat')
    } else {
      setShowCat('')
    }
  }, 100)

  useEffect(() => {
    document.addEventListener('scroll', scrollToTopHander, {
      passive: true,
    })

    return () => {
      document.removeEventListener('scroll', scrollToTopHander)
    }
  }, [])
  return <Cat onClick={scrollToTop} className={showCat} />
}

export default BackToTop
