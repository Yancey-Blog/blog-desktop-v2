import { FC, ComponentType } from 'react'
import { randomSeries } from 'yancey-js-util'

interface Props {
  count: number
  skeletonComponent: ComponentType
}

const SkeletonIterator: FC<Props> = ({
  count,
  skeletonComponent: Skeleton,
}) => {
  return (
    <>
      {Array.from({ length: count }, () => randomSeries(6)).map((val) => (
        <Skeleton key={val} />
      ))}
    </>
  )
}

export default SkeletonIterator
