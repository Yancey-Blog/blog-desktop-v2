import { createContext } from 'react'
import { checkWebp } from 'yancey-js-util'

const WebpContext = createContext(
  typeof document !== 'undefined' && checkWebp(),
)

export default WebpContext
