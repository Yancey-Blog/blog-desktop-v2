import React, { FC } from 'react'
import styled from 'styled-components'
import { SVG_SPRITE } from 'src/shared/constants'
import SubHeader from '../SubTitle/SubTitle'
import Tag from '../Tag/Tag'

const TagCloudWrapper = styled.div`
  margin: 4rem 0;
`

interface Props {
  tagCloud: string[]
}

const TagCloud: FC<Props> = ({ tagCloud }) => {
  return (
    <TagCloudWrapper>
      <SubHeader title="Tag Cloud" icon={SVG_SPRITE.tag} />

      {tagCloud.map((tag) => {
        return <Tag key={tag} tag={tag} />
      })}
    </TagCloudWrapper>
  )
}

export default TagCloud
