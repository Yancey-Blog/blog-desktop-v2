import React, { FC } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Snippet,
  Highlight,
  Configure,
} from 'react-instantsearch-dom'

const ALGOLIA_SEARCH_APP_ID = '5Y6Y04WE04'
const ALGOLIA_SEARCH_API_KEY = '46f32897c2a83b6495111a68bd1cd8c7'
const ALGOLIA_SEARCH_INDEX_NAME = 'prod_YANCEY_BLOG'

const searchClient = algoliasearch(
  ALGOLIA_SEARCH_APP_ID,
  ALGOLIA_SEARCH_API_KEY,
  {},
)

const Hit = ({ hit }: any) => (
  <>
    <div className="hit-name">
      <Highlight attribute="name" hit={hit} />
    </div>
    <hr />
    <div className="hit-description">
      <Highlight attribute="description" hit={hit} />
    </div>
    <hr />
    <div className="hit-content">
      <Snippet hit={hit} attribute="content" />
    </div>
  </>
)

const AlgoliaSearchBox: FC = () => {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch
        indexName={ALGOLIA_SEARCH_INDEX_NAME}
        searchClient={searchClient}
      >
        <Configure
          attributesToSnippet={['content:80']}
          snippetEllipsisText="..."
          // highlightPreTag='<em class="search-highlight">'
          // highlightPostTag="</em>"
        />
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  )
}

export default AlgoliaSearchBox
