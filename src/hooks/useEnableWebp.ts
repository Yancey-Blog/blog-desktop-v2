import { useEffect, useState } from 'react'
import { checkWebp } from 'yancey-js-util'

export const useEnableWebp = () => {
  const [enableWebp, setEnableWebp] = useState(false)

  useEffect(() => {
    setEnableWebp(checkWebp())
  }, [])

  return { enableWebp }
}
