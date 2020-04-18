import React, { FC } from 'react'
import styled from 'styled-components'
import { flexMixin, backgroundMixin } from 'src/styled/mixins'
import { SVG_SPRITE } from 'src/shared/constants'
import SubTitle from './SubTitle'
import { IOpenSource } from '../types'

const OpenSourceWrapper = styled.section`
  ${flexMixin('space-between')}
`

const OpenSourceItem = styled.figure`
  position: relative;
  width: 18.5rem;
  height: 11rem;
  ${backgroundMixin()}
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 400ms linear;

  &::after {
    position: absolute;
    content: attr(data-title);
    left: 18.5rem;
    margin-top: 1.4rem;
    padding: 0.5rem 0;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
    transition: all 400ms linear;
  }

  &::before {
    position: absolute;
    content: attr(data-intro);
    bottom: 1rem;
    left: -50%;
    width: 100%;
    font-size: 0.9rem;
    font-style: italic;
    letter-spacing: 1px;
    color: #bbb;
    transform: translate3d(-50%, -50%, 0);
    z-index: 2;
    transition: all 400ms linear;
  }

  &:hover {
    .openSourceOverlay {
      visibility: visible;
      opacity: 1;
      transition: all 400ms linear;
    }
  }

  &:hover::before {
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate3d(-50%, -50%, 0);
  }

  &:hover::after {
    left: 0;
  }
`

const Overlay = styled.div`
  visibility: hidden;
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: ${({ theme }) => theme.colors.sevenOpcityBlack};
  transition: all 400ms linear;
`

interface Props {
  openSources: IOpenSource[]
}

const OpenSource: FC<Props> = ({ openSources }) => {
  return (
    <>
      <SubTitle icon={SVG_SPRITE.fire} title="New Release!" />

      <OpenSourceWrapper>
        {openSources.slice(0, 3).map((openSource) => (
          <a
            href={openSource.url}
            target="_blank"
            rel="noopener noreferrer"
            key={openSource._id}
          >
            <OpenSourceItem
              style={{
                backgroundImage: `url(${openSource.posterUrl})`,
              }}
              data-title={openSource.title}
              data-intro={openSource.description}
            >
              <Overlay className="openSourceOverlay" />
            </OpenSourceItem>
          </a>
        ))}
      </OpenSourceWrapper>
    </>
  )
}

export default OpenSource
