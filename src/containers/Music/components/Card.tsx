import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { transitionMixin } from 'src/styled/mixins'
import { formatDate, generateAliOSSSuffix } from 'src/shared/utils'
import { ALI_OSS_SUFFIX } from 'src/shared/constants'

const CardContaiener = styled.div`
  position: relative;
  height: 18.2rem;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Meta = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  padding: 1.5rem 2rem;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.background.blurCard};
  overflow: hidden;
  cursor: pointer;
  ${transitionMixin('all', 300, 'ease')}

  &:hover {
    top: 0;
    height: 100%;
    ${transitionMixin('all', 300, 'ease')}
  }
`

const Date = styled.time`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.pink};
`

const Title = styled.p`
  padding: 1rem 0 0.5rem;
  height: 3.1rem;
  color: ${({ theme }) => theme.text.header};
  font-size: 1.2rem;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Divider = styled.hr`
  margin: 0.8rem auto 5.6rem 0;
  width: 3rem;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.pink};
`

const Btn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.green};
  padding: 0.6rem 1.8rem;
  font-size: 1rem;
  ${transitionMixin('all', 200, 'ease')}
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    ${transitionMixin('all', 200, 'ease')}
  }
`

interface Props {
  type?: string
  url: string
  title: string
  date: string
  cover: string
}

const Card: FC<Props> = ({ type, url, title, date, cover }) => {
  return (
    <CardContaiener>
      <picture>
        <source
          srcSet={`${cover}${generateAliOSSSuffix(ALI_OSS_SUFFIX.WEBP_SUFFIX)}`}
          type="image/webp"
        />
        <Img src={cover} alt={title} />
      </picture>

      <Meta>
        <Date>{formatDate(date, 'YYYY-MM-DD')}</Date>
        <Title>{title}</Title>
        <Divider />

        {type === 'note' ? (
          <Link href={`/post/${url}`}>
            <a>
              <Btn>READ MORE</Btn>
            </a>
          </Link>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Btn>LISTEN</Btn>
          </a>
        )}
      </Meta>
    </CardContaiener>
  )
}

export default Card
