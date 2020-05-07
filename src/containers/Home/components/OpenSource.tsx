import React, { FC } from 'react'
import styled from 'styled-components'
import { flexMixin, transitionMixin } from 'src/styled/mixins'
import { SVG_SPRITE, ALI_OSS_SUFFIX } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import SubTitle from './SubTitle'
import { IOpenSource } from '../types'

const OpenSourceWrapper = styled.section`
  ${flexMixin('space-between')}
`

const OpenSourceItem = styled.picture`
  display: block;
  position: relative;
  width: 19.2rem;
  height: 11rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.threeOpcityBlack};
  overflow: hidden;
  ${transitionMixin('all', 400, 'linear')};

  source,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    position: absolute;
    content: attr(data-title);
    left: 19.2rem;
    margin-top: 1.4rem;
    padding: 0.5rem 0;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
    ${transitionMixin('all', 400, 'linear')}
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
    ${transitionMixin('all', 400, 'linear')}
  }

  &:hover {
    .openSourceOverlay {
      visibility: visible;
      opacity: 1;
      ${transitionMixin('all', 400, 'linear')}
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
  ${transitionMixin('all', 400, 'linear')}
`

interface Props {
  openSources: IOpenSource[]
}

const OpenSource: FC<Props> = ({ openSources }) => {
  return (
    <>
      <SubTitle icon={SVG_SPRITE.fire} title="New Release!" />

      <OpenSourceWrapper>
        {openSources.slice(0, 3).map((openSource) => {
          const { _id, url, title, description, posterUrl } = openSource

          return (
            <a href={url} target="_blank" rel="noopener noreferrer" key={_id}>
              <OpenSourceItem data-title={title} data-intro={description}>
                <source
                  srcSet={`${posterUrl}${generateAliOSSSuffix(
                    ALI_OSS_SUFFIX.WEBP_SUFFIX,
                  )}`}
                  type="image/webp"
                />
                <img src={posterUrl} alt={title} />
                <Overlay className="openSourceOverlay" />
              </OpenSourceItem>
            </a>
          )
        })}
      </OpenSourceWrapper>
    </>
  )
}

export default OpenSource
