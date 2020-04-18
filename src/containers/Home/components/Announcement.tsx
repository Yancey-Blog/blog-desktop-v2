import React, { FC } from 'react'
import styled from 'styled-components'
import { SVG_SPRITE } from 'src/shared/constants'
import { IAnnouncement } from '../types'
import svgIcons from '../../../../static/yancey-official-blog-svg-icons.svg'

interface Props {
  announcements: IAnnouncement[]
}

const AnnouncementWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border: 1px dashed;
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.text.secondary};
  padding: 1.8rem;
  border-radius: 10px;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.background.secondary};
`

const SVG = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
`

const Announcement: FC<Props> = ({ announcements }) => {
  return (
    <AnnouncementWrapper>
      <SVG>
        <use xlinkHref={`${svgIcons}${SVG_SPRITE.megaphone}`} />
      </SVG>
      {announcements[0]?.content}
    </AnnouncementWrapper>
  )
}

export default Announcement
