import React, { FC, useState } from 'react'
import { useMutation } from '@apollo/client'
import Router from 'next/router'
import styled from 'styled-components'
import { TwitterShareButton } from 'react-share'
import { flexMixin } from 'src/styled/mixins'
import { SVG_SPRITE } from 'src/shared/constants'
import { UPDATE_LIKE } from '../../typeDefs'

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
  id: string
  title: string
  postUrl: string
  like: number
}

const SharePanel: FC<Props> = ({ id, title, like, postUrl }) => {
  const [likeStatus, setLikeStatus] = useState(false)

  const [updateLike] = useMutation(UPDATE_LIKE, {
    onError() {
      setLikeStatus(false)
    },
  })
  const onSubmit = () => {
    if (!likeStatus) {
      updateLike({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          updateLike: {
            id,
            __typename: 'PostItemModel',
            like: like + 1,
          },
        },
      })
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
