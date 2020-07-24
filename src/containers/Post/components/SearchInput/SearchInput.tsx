import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { SVG_SPRITE } from 'src/shared/constants'

const SearchInputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  margin-left: 1.6rem;
  padding: 0.8rem;
  width: 13rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text.primary};
  border-radius: 0.3rem;
  outline: none;
`

const SearchSvg = styled.svg`
  position: absolute;
  margin: 0 !important;
  top: 0.73rem;
  right: 0.73rem;
  width: 1.2rem !important;
  height: 1.2rem !important;
  fill: ${({ theme }) => theme.text.header};
  cursor: pointer;
`

const SearchInput: FC = () => {
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
    <SearchInputWrapper>
      <Input
        placeholder="Search..."
        type="text"
        onChange={handleInputChange}
        onKeyUp={(e) => onKeyUpSearch(e)}
      />
      <SearchSvg onClick={onClickSearch}>
        <use xlinkHref={SVG_SPRITE.search} />
      </SearchSvg>
    </SearchInputWrapper>
  )
}

export default SearchInput
