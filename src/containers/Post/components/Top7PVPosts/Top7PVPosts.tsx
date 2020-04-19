import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import { SVG_SPRITE } from 'src/shared/constants'
import SubHeader from '../SubTitle/SubTitle'

const CardItem = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.6rem;
  overflow: hidden;
`

const BlurBg = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  filter: blur(10px);
`

const CardContent = styled.span`
  position: relative;
  ${flexMixin('space-between')}
  padding: .9rem;
  background-color: ${({ theme }) => theme.background.blurCard};
`

const Title = styled.span`
  display: block;
  width: 20rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.text.header};
`

const Url = styled.span`
  display: block;
  margin-top: 0.8rem;
  width: 20rem;
  font-size: 1rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.text.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Thumb = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem;
  object-fit: cover;
`

const Top7PVPosts = () => {
  return (
    <>
      <SubHeader title="Top 7 Most Viewed" icon={SVG_SPRITE.crown} />

      <Link href="about">
        <a>
          <CardItem>
            <BlurBg
              style={{
                backgroundImage:
                  'url(https://static.yancey.app/150be0_a045e63424e74c0cb0e578f5e7d8d1e1_mv2_d_2048_1365_s_2.jpg)',
              }}
            />

            <CardContent>
              <span>
                <Title>[HTTP 系列] 第 2 篇 —— HTTP 协议那些事</Title>
                <Url>https://yanceyleo.com/p/5bc202a26b48dfee0a0dcedf</Url>
              </span>
              <Thumb
                alt="xxxx"
                src="https://static.yancey.app/150be0_a045e63424e74c0cb0e578f5e7d8d1e1_mv2_d_2048_1365_s_2.jpg"
              />
            </CardContent>
          </CardItem>
        </a>
      </Link>

      <Link href="about">
        <a>
          <CardItem>
            <BlurBg
              style={{
                backgroundImage:
                  'url(https://static.yancey.app/150be0_a045e63424e74c0cb0e578f5e7d8d1e1_mv2_d_2048_1365_s_2.jpg)',
              }}
            />

            <CardContent>
              <span>
                <Title>Grid Layout</Title>
                <Url>https://yanceyleo.com/p/5bc202a26b48dfee0a0dcedf</Url>
              </span>
              <Thumb
                alt="xxxx"
                src="https://static.yancey.app/150be0_a045e63424e74c0cb0e578f5e7d8d1e1_mv2_d_2048_1365_s_2.jpg"
              />
            </CardContent>
          </CardItem>
        </a>
      </Link>
    </>
  )
}

export default Top7PVPosts
