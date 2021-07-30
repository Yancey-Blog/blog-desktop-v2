import { FC } from 'react'
import styled from 'styled-components'
import Picture from 'src/components/Picture/Picture'
import { transitionMixin } from 'src/styled/mixins'
import breakpoints from 'src/styled/breakpoints'
import { SVG_SPRITE } from 'src/shared/constants'
import SubTitle from './SubTitle'
import { IOpenSource } from '../types'

const OpenSourceWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
`

const OpenSourceItem = styled.div`
  display: block;
  position: relative;
  height: 11rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.threeOpcityBlack};
  overflow: hidden;
  ${transitionMixin('all', 400, 'linear')};

  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }

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
    z-index: ${({ theme }) => theme.zIndex.positive};
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
                <Picture src={posterUrl}>
                  <img src={posterUrl} alt={title} />
                </Picture>
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
