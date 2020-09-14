import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
import { SVG_SPRITE } from 'src/shared/constants'
import { SearchBoxWrapper, Input, SearchSvg } from './styled'

const SearchBox: FC = () => {
  const router = useRouter()

  const [val, setVal] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setVal(e.target.value)

  const onClickSearch = () => {
    router.push({
      pathname: '/post',
      search: val.trim() === '' ? undefined : `?title=${val}`,
    })
    window.scrollTo(0, 0)
  }

  const onKeyUpSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    const event = e || window.event
    const key = event.which || event.keyCode || event.charCode
    if (key === 13) {
      onClickSearch()
    }
  }

  return (
    <SearchBoxWrapper>
      <Input
        placeholder="Search..."
        type="text"
        onChange={handleInputChange}
        onKeyUp={(e) => onKeyUpSearch(e)}
      />
      <SearchSvg onClick={onClickSearch}>
        <use xlinkHref={SVG_SPRITE.search} />
      </SearchSvg>
    </SearchBoxWrapper>
  )
}

export default SearchBox
