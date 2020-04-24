import React, { FC } from 'react'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import { SVG_SPRITE } from 'src/shared/constants'
import svgIcons from 'src/static/svg-sprite.svg'

const SharePanelWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 2rem;
`

const Svg = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
`

const TwitterSvg = styled(Svg)`
  margin-bottom: 1rem;
`

const LikeSvg = styled(Svg)`
  margin-right: 0.8rem;
`

const Like = styled.div`
  ${flexMixin()}
`

interface Props {
  like: number
}

const SharePanel: FC<Props> = ({ like }) => (
  <SharePanelWrapper>
    <TwitterSvg>
      <use xlinkHref={`${svgIcons}${SVG_SPRITE.twitter1}`} />
    </TwitterSvg>

    <Like>
      <LikeSvg>
        <use xlinkHref={`${svgIcons}${SVG_SPRITE.like}`} />
      </LikeSvg>
      <span>
        {like} {like > 1 ? 'Likes' : 'Like'}
      </span>
    </Like>
  </SharePanelWrapper>
)

export default SharePanel
