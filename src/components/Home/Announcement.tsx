import React from 'react'
import styled from 'styled-components'

export interface IAnnouncement {
  _id: string
  content: string
  createdAt: string
  updatedAt: string
}

interface IProps {
  data: IAnnouncement[]
}

const Item = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Announcement = ({ data }: IProps) => {
  return (
    <Item>
      {data.map((announcement) => {
        return <div key={announcement._id}>{announcement.content}</div>
      })}
    </Item>
  )
}

export default Announcement
