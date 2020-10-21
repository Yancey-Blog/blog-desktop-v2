import { FC } from 'react'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'

const SubTitleWrapper = styled.h3`
  ${flexMixin('flex-start')}
  padding-bottom: .6rem;
  width: 20rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px dashed;
  border-bottom-color: ${({ theme }) => theme.border};
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
    <SubTitleWrapper>
      <SVG>
        <use xlinkHref={icon} />
      </SVG>
      {title}
    </SubTitleWrapper>
  )
}

export default SubTitle
