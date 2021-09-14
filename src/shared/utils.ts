import { DateTime } from 'luxon'

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

export const formatDate = (ISOString: string, format = 'DDD') =>
  DateTime.fromISO(ISOString).toFormat(format, { locale: 'en-US' })

export const devToolsWarning = () => {
  // eslint-disable-next-line no-console
  console.log(
    `${'\n'} %c Yancey Blog %c https://yanceyleo.com ${'\n'}`,
    'color: #fadfa3; background: #030307; padding:5px 0;',
    'background: #fadfa3; padding:5px 0;',
  )
}

export const isAnniversary = () => {
  const now = DateTime.now()
  return now.month === 10 && now.day === 14
}
