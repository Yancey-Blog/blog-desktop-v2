// @ts-ignore
import hljs from 'highlight.js/lib/core'
// @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript'
// @ts-ignore
import python from 'highlight.js/lib/languages/python'
// @ts-ignore
import bash from 'highlight.js/lib/languages/bash'
// @ts-ignore
import dart from 'highlight.js/lib/languages/dart'
// @ts-ignore
import typescript from 'highlight.js/lib/languages/typescript'
// @ts-ignore
import yaml from 'highlight.js/lib/languages/yaml'
// @ts-ignore
import shell from 'highlight.js/lib/languages/shell'
// @ts-ignore
import scss from 'highlight.js/lib/languages/scss'
// @ts-ignore
import css from 'highlight.js/lib/languages/css'
import tocbot from 'tocbot'

export const setupHighlight = () => {
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('python', python)
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('dart', dart)
  hljs.registerLanguage('typescript', typescript)
  hljs.registerLanguage('yaml', yaml)
  hljs.registerLanguage('shell', shell)
  hljs.registerLanguage('scss', scss)
  hljs.registerLanguage('css', css)

  hljs.initHighlighting()
}

export const addLineNumbers = () => {
  const hljsDOM = document.querySelectorAll('.hljs')
  for (let i = 0, l = hljsDOM.length; i < l; i += 1) {
    hljsDOM[i].innerHTML = `<ol><li>${hljsDOM[i].innerHTML.replace(
      /\n/g,
      '\n</li><li>',
    )}\n</li></ol>`
  }
}

export const removeEmbededTag = (content: string) =>
  content.replace(/```embeded\s(.*)\s```/gi, '$1')

export const setupTocbot = () => {
  tocbot.init({
    tocSelector: '.postMenu',
    contentSelector: '.postDetailContent',
    headingSelector: 'h1, h2, h3',
    hasInnerContainers: true,
  })
}

export const generatePostUrl = (id: string) =>
  `${process.env.NEXT_PUBLIC_DOMAIN_URL}/post/${id}`
