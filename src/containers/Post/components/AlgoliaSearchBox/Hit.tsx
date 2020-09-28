import React from 'react'
import { Snippet, Highlight } from 'react-instantsearch-dom'

const Hit = ({ hit }: any) => {
  return (
    <>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <br />
      <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div>
      <br />
      <div className="hit-content">
        <Snippet hit={hit} attribute="content" />
      </div>
    </>
  )
}

export default Hit
