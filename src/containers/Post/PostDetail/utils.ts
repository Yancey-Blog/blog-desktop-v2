import { RefObject } from 'react'
import hljs from 'highlight.js'
import tocbot from 'tocbot'

export const setupHighlight = (
  markdownWrapperEl: RefObject<HTMLDivElement>,
) => {
  if (markdownWrapperEl?.current) {
    const preNodes = markdownWrapperEl.current.querySelectorAll('pre')
    preNodes.forEach((preNode) => {
      hljs.highlightElement(preNode)
    })
  }
  hljs.highlightAll()
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
