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
  console.log(
    `${'\n'} %c Yancey Blog v${__YANCEY_BLOG_VERSION__} ${__GIT_HASH__.slice(
      0,
      7,
    )} %c https://yanceyleo.com ${'\n'}`,
    'color: #fadfa3; background: #030307; padding:5px 0;',
    'background: #fadfa3; padding:5px 0;',
  )
}

export const generateAliOSSSuffix = (...props: AliOSSSuffix[]) => {
  let suffix = ALI_OSS_SUFFIX_BASE
  props.forEach((val) => {
    suffix += val
  })
  return suffix
}
