import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import { useEnableWebp } from 'src/hooks/useEnableWebp'
import { ALI_OSS_URL, ALI_OSS_SUFFIX } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'

interface ColorProps {
  is404Page: boolean
}

const ErrorPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.headerHeight};
  min-height: 100vh;
  font-family: 'Ubuntu' sans-serif;
`

const Header = styled.div`
  ${flexMixin()};
  height: calc(50vh - ${({ theme }) => theme.headerHeight});
`

const Title = styled.h1<ColorProps>`
  margin-right: 4rem;
  font-size: 16rem !important;
  color: ${({ is404Page }) => (is404Page ? '#fef1da' : '#e5f8f2')};
`

const Tips = styled.p<ColorProps>`
  font-size: 3.6rem !important;
  color: ${({ is404Page }) => (is404Page ? '#a89888' : '#88a899')};
`

const SubTips = styled(Tips)<ColorProps>`
  margin: 1.8rem 0;
  font-size: 2rem !important;
  font-weight: 300;
`

const BackToHomeBtn = styled.button<ColorProps>`
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ is404Page }) => (is404Page ? '#feb641' : '#00ba7c')};
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`

const ErrorImg = styled.img`
  display: block;
  width: 100%;
  height: 50vh;
  object-fit: cover;
`

interface Props {
  statusCode: number
  imageUrl: string
}

const ErrorPage: FC<Props> = ({ statusCode, imageUrl }) => {
  const { enableWebp } = useEnableWebp()
  const imgUrl = `${ALI_OSS_URL}/blog-fe-static/${imageUrl}`
  const is404Page = statusCode === 404

  return (
    <ErrorPageWrapper>
      <Header>
        <Title is404Page={is404Page}>{statusCode}</Title>
        <div>
          <Tips is404Page={is404Page}>Oops, You found me!</Tips>
          <SubTips is404Page={is404Page}>
            {statusCode === 404
              ? 'You seem to have found a dead link!'
              : 'An error occurred on server!'}
          </SubTips>
          <Link href="/">
            <a>
              <BackToHomeBtn is404Page={is404Page}>TAKE ME HOME</BackToHomeBtn>
            </a>
          </Link>
        </div>
      </Header>
      <figure>
        <ErrorImg
          src={
            enableWebp
              ? `${imgUrl}${generateAliOSSSuffix(ALI_OSS_SUFFIX.WEBP_SUFFIX)}`
              : imgUrl
          }
          alt={statusCode.toString()}
        />
      </figure>
    </ErrorPageWrapper>
  )
}

export default ErrorPage
