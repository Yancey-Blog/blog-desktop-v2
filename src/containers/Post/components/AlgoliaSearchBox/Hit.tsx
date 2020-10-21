import { ComponentType } from 'react'
import Link from 'next/link'
import { Snippet, Highlight } from 'react-instantsearch-dom'
import { Hit } from 'react-instantsearch-core'
import { HitName, HitTag, HitDescription, HitContent } from './styled'

interface HitParams {
  content: string
  description: string
  imageUrl: string
  name: string
  objectID: string
  labels: string[]
}

interface Props {
  hit: Hit<HitParams>
}

const Hits: ComponentType<Props> = ({ hit }) => {
  return (
    <Link href={`/post/${hit.objectID}`}>
      <a>
        <HitName>
          <Highlight attribute="name" hit={hit} />
          {hit.labels.map((val: string) => (
            <HitTag key={val}>{val}</HitTag>
          ))}
        </HitName>
        <br />
        <HitDescription>
          <Snippet attribute="description" hit={hit} />
        </HitDescription>
        <br />
        <HitContent>
          <Snippet hit={hit} attribute="content" />
        </HitContent>
      </a>
    </Link>
  )
}

export default Hits
