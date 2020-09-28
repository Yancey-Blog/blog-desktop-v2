import React, { FC } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  PoweredBy,
} from 'react-instantsearch-dom'
import Hit from './Hit'
import { SearchBoxContainer, Result } from './styled'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  {},
)

const AlgoliaSearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <InstantSearch
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME}
        searchClient={searchClient}
      >
        <Configure
          attributesToSnippet={['content:120', 'description:50']}
          snippetEllipsisText="..."
        />
        <SearchBox />
        <Result>
          <Hits hitComponent={Hit} />
        </Result>

        <PoweredBy />
      </InstantSearch>
    </SearchBoxContainer>
  )
}

export default AlgoliaSearchBox
