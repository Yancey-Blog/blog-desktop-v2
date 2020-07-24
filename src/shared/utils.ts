import moment from 'moment'
import { ALI_OSS_SUFFIX_BASE, AliOSSSuffix } from './constants'

export const scrollToTop = () => {
  let timer: number = 0
  cancelAnimationFrame(timer)
  const startTime = +new Date()
  const b = document.body.scrollTop || document.documentElement.scrollTop
  const d = 500
  const c = b
  timer = requestAnimationFrame(function func() {
    const t = d - Math.max(0, startTime - +new Date() + d)
    document.documentElement.scrollTop = (t * -c) / d + b
    document.body.scrollTop = (t * -c) / d + b
    timer = requestAnimationFrame(func)
    if (t === d) {
      cancelAnimationFrame(timer)
    }
  })
}

export const noop = () => {}

export const formatDate = (ISOString: string, format = 'YYYY-MM-DD HH:mm:ss') =>
  moment(ISOString).format(format)

export const devToolsWarning = () => {
  // eslint-disable-next-line no-console
  console.log(`
    __     __      _   _  _____ ________     __  ____  _      ____   _____ 
    \\ \\   / //\\   | \\ | |/ ____|  ____\\ \\   / / |  _ \\| |    / __ \\ / ____|
     \\ \\_/ //  \\  |  \\| | |    | |__   \\ \\_/ /  | |_) | |   | |  | | |  __ 
      \\   // /\\ \\ | . \` | |    |  __|   \\   /   |  _ <| |   | |  | | | |_ |
       | |/ ____ \\| |\\  | |____| |____   | |    | |_) | |___| |__| | |__| |
       |_/_/    \\_\\_| \\_|\\_____|______|  |_|    |____/|______\\____/ \\_____|
      `)
}

export const generateAliOSSSuffix = (...props: AliOSSSuffix[]) => {
  let suffix = ALI_OSS_SUFFIX_BASE
  props.forEach((val) => {
    suffix += val
  })
  return suffix
}
