import React, { FC } from 'react'
import { IAnnouncement } from '../types'

interface Props {
  announcements: IAnnouncement[]
}

const Announcement: FC<Props> = ({ announcements }) => {
  return <div>{announcements[0]?.content}</div>
}

export default Announcement
