import React from 'react'
import svgSprite from '../public/svg-sprite.svg'

export default () => (
  <footer
    style={{
      width: '100%',
      height: '60px',
    }}
  >
    <svg>
      <use xlinkHref={`${svgSprite}#icon-graphql`} />
    </svg>
  </footer>
)
