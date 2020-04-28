import { createContext } from 'react'
import { checkWebp } from 'yancey-js-util'

const enableWebp = checkWebp()
const WebpContext = createContext(enableWebp)

export default WebpContext
