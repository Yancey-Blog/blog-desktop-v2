import React, { FC } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  // Pagination,
  Highlight,
  // ClearRefinements,
  // RefinementList,
  // Configure,
} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  '5Y6Y04WE04',
  '46f32897c2a83b6495111a68bd1cd8c7',
)

function Hit(props: any) {
  const { hit } = props
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div>
      <p>{hit.name}</p>
    </div>
  )
}

const AlgoliaSearchBox: FC = () => {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="prod_YANCEY_BLOG" searchClient={searchClient}>
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  )
}

export default AlgoliaSearchBox
