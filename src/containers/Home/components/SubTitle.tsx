import { FC } from 'react'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import breakpoints from 'src/styled/breakpoints'

const Header = styled.h2`
  ${flexMixin('flex-start')}
  margin: 4rem auto 2rem;
  padding-bottom: 0.6rem;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme }) => theme.border};

  @media only screen and ${breakpoints.device.laptop} {
    display: none;
  }
`

const SVG = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.8rem;
`

interface Props {
  icon: string
  title: string
}

const SubTitle: FC<Props> = ({ icon, title }) => {
  return (
    <Header>
      <SVG>
        <use xlinkHref={icon} />
      </SVG>
      {title}
    </Header>
  )
}

export default SubTitle
