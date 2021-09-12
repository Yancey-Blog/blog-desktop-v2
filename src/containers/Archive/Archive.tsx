import { FC, Fragment } from 'react'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import orderBy from 'lodash.orderby'
import { months } from 'src/shared/constants'
import { ARCHIVE } from 'src/containers/Post/typeDefs'
import { ArchiveQuery } from 'src/containers/Post/types'
import ImageHeader from 'src/components/ImageHeader/ImageHeader'
import {
  ArchiveWrapper,
  Year,
  YearList,
  Month,
  MonthTxt,
  DayList,
  DayItem,
  Day,
} from './styled'

const Archive: FC = () => {
  const { data } = useQuery<ArchiveQuery>(ARCHIVE, {
    notifyOnNetworkStatusChange: true,
  })

  return (
    <>
      <ImageHeader title="Archive" imageUrl="/archive_page_header.jpg" />

      <ArchiveWrapper>
        {!data
          ? null
          : data.archive.map((year) => (
              <Fragment key={year._id}>
                <Year>{year._id}</Year>
                <YearList>
                  {year.months.map((month) => (
                    <li key={month.month}>
                      <input
                        id={`archive_${year._id}_${month.month}`}
                        type="checkbox"
                        name="tabs"
                        defaultChecked
                      />
                      <label htmlFor={`archive_${year._id}_${month.month}`}>
                        <Month>
                          <MonthTxt>
                            {months[month.month - 1]}
                            {'. '}({month.days.length}{' '}
                            {month.days.length > 1 ? 'posts' : 'post'})
                          </MonthTxt>
                        </Month>
                      </label>
                      <DayList className="dayListContainer">
                        {
                          // TODO:
                          // The problem of descend ordering by `createdAt`
                          // need to be solved by the backend.
                          orderBy(month.days, ['createdAt'], ['desc']).map(
                            (day) => (
                              <DayItem key={day.id}>
                                <Day>
                                  {DateTime.fromISO(day.createdAt).day}
                                  {': '}
                                </Day>
                                <Link href={`/post/${day.id}`}>
                                  <a>
                                    {day.title} ({day.pv} PV )
                                  </a>
                                </Link>
                              </DayItem>
                            ),
                          )
                        }
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
