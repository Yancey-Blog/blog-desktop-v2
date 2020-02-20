import React from 'react'

export interface IAnnouncement {
  _id: string
  content: string
  createdAt: string
  updatedAt: string
}

interface IProps {
  data: IAnnouncement[]
}

const Announcement = ({ data }: IProps) => {
  return (
    <div>
      {data.map(announcement => {
        return <div key={announcement._id}>{announcement.content}</div>
      })}
    </div>
  )
}

export default Announcement
