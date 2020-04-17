import React, { FC } from 'react'
import styled from 'styled-components'
import { IAnnouncement } from '../types'

interface Props {
  announcements: IAnnouncement[]
}

export const AnnouncementBar = styled.section`
  position: relative;
`

const Announcement: FC<Props> = ({ announcements }) => {
  return <div>{announcements[0]?.content}</div>
}

export default Announcement
