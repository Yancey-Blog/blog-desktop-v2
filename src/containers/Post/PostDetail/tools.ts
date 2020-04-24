import React from 'react'
import hljs from 'highlight.js'
// @ts-ignore
import baguetteBox from 'baguettebox.js'

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

export const showImageAlt = () => {
  const imgList: string[] = []
  const imgTag = document.querySelectorAll('img')
  for (let i = 0, l = imgTag.length; i < l; i += 1) {
    imgList.push(imgTag[i].alt)
    ;(imgTag[i].parentNode as HTMLDivElement).classList.add('postImgGroup')
    ;(imgTag[i].parentNode as HTMLDivElement).insertAdjacentHTML(
      'beforeend',
      `<span class='postImgAlt'>${imgList[i]}</span>`,
    )
  }
}

export const wrapImg = () => {
  const imgDom: NodeListOf<HTMLImageElement> = document.querySelectorAll(
    '.postDetailContent img',
  )
  const imgWrapper = document.querySelectorAll('.postImgGroup')
  for (let i = 0, len = imgDom.length; i < len; i += 1) {
    imgWrapper[
      i
    ].innerHTML = `<a href='${imgDom[i].src}' data-caption='${imgDom[i].alt}'>${imgWrapper[i].innerHTML}</a>`
  }
}

export const setupBaguetteBox = () => {
  baguetteBox.run('.postDetailContent')
}
