import React from 'react'
import hljs from 'highlight.js'
import tocbot from 'tocbot'
import { DOMAIN } from 'src/shared/constants'

const POST_DETAIL_CONTENT = 'postDetailContent'

export const setupHighlight = (
  markdownWrapperEl: React.RefObject<HTMLDivElement>,
) => {
  if (markdownWrapperEl?.current) {
    const preNodes = markdownWrapperEl.current.querySelectorAll('pre')
    preNodes.forEach((preNode) => {
      hljs.highlightBlock(preNode)
    })
  }
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
    contentSelector: `.${POST_DETAIL_CONTENT}`,
    headingSelector: 'h1, h2, h3',
    hasInnerContainers: true,
  })
}

export const generateShareUrl = (id: string) => `${DOMAIN}/post/${id}`
