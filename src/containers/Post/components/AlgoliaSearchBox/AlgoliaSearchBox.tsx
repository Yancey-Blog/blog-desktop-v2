import { FC, useState, useEffect, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  PoweredBy,
  connectStateResults,
} from 'react-instantsearch-dom'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'
import AlgoliaSarchBoxSkeleton from '../AlgoliaSarchBoxSkeleton/AlgoliaSarchBoxSkeleton'
import Hit from './Hit'
import { Result, SearchBoxWrapper } from './styled'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  {},
)

const AlgoliaSearchBox: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const router = useRouter()

  const closeKeyboard = () => {
    // @ts-ignore
    document.activeElement?.blur()
  }

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    const val = e.currentTarget.value.trim()
    setShowDrawer(!!val)
  }

  const handleClose = () => {
    setShowDrawer(false)
    closeKeyboard()
  }

  const LoadingIndicator = connectStateResults(({ isSearchStalled }) =>
    isSearchStalled ? (
      <SkeletonIterator count={5} skeletonComponent={AlgoliaSarchBoxSkeleton} />
    ) : null,
  )

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      handleClose()
    })
  }, [])

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
          onReset={handleClose}
        />
      </SearchBoxWrapper>

      <Result className={showDrawer ? 'showDrawer' : ''}>
        <LoadingIndicator />
        <Hits hitComponent={Hit} />
        <PoweredBy />
      </Result>
    </InstantSearch>
  )
}

export default AlgoliaSearchBox
