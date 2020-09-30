import React, { FC, useState, SyntheticEvent } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  PoweredBy,
} from 'react-instantsearch-dom'
import Hit from './Hit'
import { Result, SearchBoxWrapper } from './styled'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  {},
)

const AlgoliaSearchBox: FC = () => {
  const [showSearchResultDrawer, setShowSearchResultDrawer] = useState(false)

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    const val = e.currentTarget.value.trim()
    setShowSearchResultDrawer(!!val)
  }

  const handleResetChange = () => setShowSearchResultDrawer(false)
  return (
    <InstantSearch
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME}
      searchClient={searchClient}
    >
      <Configure
        attributesToSnippet={['content:120', 'description:50']}
        snippetEllipsisText="..."
      />
      <SearchBoxWrapper>
        <SearchBox
          onChange={(e) => handleInputChange(e)}
          onReset={handleResetChange}
        />
      </SearchBoxWrapper>

      <Result
        className={showSearchResultDrawer ? 'showSearchResultDrawer' : ''}
      >
        <Hits hitComponent={Hit} />
        <PoweredBy />
      </Result>
    </InstantSearch>
  )
}

export default AlgoliaSearchBox
