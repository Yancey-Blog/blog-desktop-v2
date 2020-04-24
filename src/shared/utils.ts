import moment from 'moment'

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

export const removeEmbededTag = (content: string) =>
  content.replace(/```embeded\s(.*)\s```/gi, '$1')
