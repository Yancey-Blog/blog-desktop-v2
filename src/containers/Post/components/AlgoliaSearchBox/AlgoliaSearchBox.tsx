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
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string,
  {},
)

const AlgoliaSearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <div className="ais-InstantSearch">
        <InstantSearch
          indexName={
            process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME as string
          }
          searchClient={searchClient}
        >
          <Configure
            attributesToSnippet={['content:120', 'description:50']}
            snippetEllipsisText="..."
          />

          {/* <ExperimentalConfigureRelatedItems
            hit={{}}
            matchingPatterns={{
              optionalFilters: [['content:code<score=1>']],
            }}
          /> */}

          <div className="right-panel">
            <SearchBox />
            <Result>
              <Hits hitComponent={Hit} />
            </Result>
          </div>
        </InstantSearch>
      </div>

      <PoweredBy />
    </SearchBoxContainer>
  )
}

export default AlgoliaSearchBox
