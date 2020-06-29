import React, { FC, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import { scrollToTop } from 'src/shared/utils'
import { Cat } from './styled'

const BackToTop: FC = () => {
  const [showCat, setShowCat] = useState('')

  const scrollToTopHandler = throttle(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    if (top > 800) {
      setShowCat('showCat')
    } else {
      setShowCat('')
    }
  }, 100)

  useEffect(() => {
    document.addEventListener('scroll', scrollToTopHandler, {
      passive: true,
    })

    return () => {
      document.removeEventListener('scroll', scrollToTopHandler)
    }
  }, [])
  return <Cat onClick={scrollToTop} className={showCat} />
}

export default BackToTop
