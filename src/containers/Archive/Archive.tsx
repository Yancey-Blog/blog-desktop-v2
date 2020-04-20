import React, { FC, Fragment } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { ARCHIVE } from 'src/containers/Post/typeDefs'
import { ArchiveQuery } from 'src/containers/Post/types'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import {
  ArchiveWrapper,
  Year,
  YearList,
  Month,
  DayList,
  DayItem,
  Day,
} from './styled'

const Archive: FC = () => {
  const { data } = useQuery<ArchiveQuery>(ARCHIVE, {
    notifyOnNetworkStatusChange: true,
  })

  if (!data) return <div>loading...</div>

  return (
    <>
      <ImageHeader
        title="Archive"
        imageUrl="/blog-fe-static/archive_page_header.jpg"
      />

      <ArchiveWrapper>
        {data.archive.map((year) => (
          <Fragment key={year._id}>
            <Year>{year._id}</Year>
            <YearList>
              {year.months.map((month) => (
                <li key={month.month}>
                  <input
                    id={`tab_${year._id}_${month.month}`}
                    type="checkbox"
                    name="tabs"
                    defaultChecked
                  />
                  <label htmlFor={`tab_${year._id}_${month.month}`}>
                    <Month>
                      {month.month}
                      {'. '}({month.days.length}{' '}
                      {month.days.length > 1 ? 'posts' : 'post'})
                    </Month>
                  </label>
                  <DayList className="day_list_container">
                    {month.days.map((day) => (
                      <DayItem key={day.id}>
                        <Day>
                          {moment(day.createdAt).date()}
                          {': '}
                        </Day>
                        <Link href={`/post/${day.id}`}>
                          <a>
                            {day.title} ({day.pv} PV )
                          </a>
                        </Link>
                      </DayItem>
                    ))}
                  </DayList>
                </li>
              ))}
            </YearList>
          </Fragment>
        ))}
      </ArchiveWrapper>
    </>
  )
}

export default Archive
