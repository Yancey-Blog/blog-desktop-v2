import React, { FC, useState, useEffect } from 'react'
import { scrollToTop } from 'src/shared/utils'
import { Cat } from './styled'

const BackToTop: FC = () => {
  const [showCat, setShowCat] = useState('')

  const scrollToTopHander = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    if (top > 800) {
      setShowCat('showCat')
    } else {
      setShowCat('')
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollToTopHander, { passive: true })

    return () => {
      document.removeEventListener('scroll', scrollToTopHander)
    }
  }, [])
  return <Cat onClick={scrollToTop} className={showCat} />
}

export default BackToTop
