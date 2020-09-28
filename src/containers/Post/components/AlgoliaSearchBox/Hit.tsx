import React, { ComponentType } from 'react'
import Link from 'next/link'
import { Snippet, Highlight } from 'react-instantsearch-dom'
import { Hit } from 'react-instantsearch-core'

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

const Hits: ComponentType<Props> = ({ hit }) => (
  <Link href={`/post/${hit.objectID}`}>
    <a>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
        {hit.labels.map((val: string) => (
          <span className="hit-tag" key={val}>
            {val}
          </span>
        ))}
      </div>
      <br />
      <div className="hit-description">
        <Snippet attribute="description" hit={hit} />
      </div>
      <br />
      <div className="hit-content">
        <Snippet hit={hit} attribute="content" />
      </div>
    </a>
  </Link>
)

export default Hits
