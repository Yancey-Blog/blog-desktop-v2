import React, { FC, useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { TwitterShareButton } from 'react-share'
import { flexMixin } from 'src/styled/mixins'
import { SVG_SPRITE } from 'src/shared/constants'

const SharePanelWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 2rem;

  .postTwitterShareBtn {
    width: 1.8rem;
    height: 1.8rem;
    margin-bottom: 1.2rem;
    cursor: pointer;
  }
`

const Svg = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`

const LikeSvg = styled(Svg)`
  margin-right: 0.8rem;
  fill: ${({ theme }) => theme.text.primary};
`

const Like = styled.div`
  ${flexMixin()}
`

interface Props {
  title: string
  postUrl: string
  like: number
  updateLike: Function
}

const SharePanel: FC<Props> = ({ title, like, postUrl, updateLike }) => {
  const [likeStatus, setLikeStatus] = useState(false)
  const onSubmit = () => {
    if (!likeStatus) {
      updateLike()
      setLikeStatus(true)
    }
  }

  Router.events.on('routeChangeStart', () => {
    setLikeStatus(false)
  })
  return (
    <SharePanelWrapper>
      <TwitterShareButton
        url={postUrl}
        title={title}
        className="postTwitterShareBtn"
      >
        <Svg>
          <use xlinkHref={SVG_SPRITE.twitter} />
        </Svg>
      </TwitterShareButton>

      <Like>
        <LikeSvg onClick={onSubmit}>
          <use
            xlinkHref={likeStatus ? SVG_SPRITE.heart : SVG_SPRITE.emptyHeart}
          />
        </LikeSvg>
        <span>
          {like} {like > 1 ? 'Likes' : 'Like'}
        </span>
      </Like>
    </SharePanelWrapper>
  )
}

export default SharePanel
