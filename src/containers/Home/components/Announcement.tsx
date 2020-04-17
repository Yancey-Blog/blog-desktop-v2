import React, { FC } from 'react'
import styled from 'styled-components'
import { SVG_SPRITE } from 'src/shared/constants'
import { IAnnouncement } from '../types'
import svgIcons from '../../../../static/yancey-official-blog-svg-icons.svg'

interface Props {
  announcements: IAnnouncement[]
}

export const AnnouncementWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  border: 1px dashed #e6e6e6;
  color: #969696;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.8rem;
  background: #fbfbfb;
`

const Announcement: FC<Props> = ({ announcements }) => {
  return (
    <AnnouncementWrapper>
      <svg>
        <use xlinkHref={`${svgIcons}${SVG_SPRITE.megaphone}`} />
      </svg>
      {announcements[0]?.content}
    </AnnouncementWrapper>
  )
}

export default Announcement
