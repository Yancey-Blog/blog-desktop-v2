import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'

const SearchInput: FC = () => {
  const router = useRouter()

  const [val, setVal] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setVal(e.target.value)

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const event = e || window.event
    const key = event.which || event.keyCode || event.charCode
    if (key === 13) {
      router.push({
        pathname: '/post',
        search: val.trim() === '' ? undefined : `?title=${val}`,
      })
    }
  }

  return (
    <input
      type="text"
      onChange={handleInputChange}
      onKeyUp={(e) => onSubmit(e)}
    />
  )
}

export default SearchInput
