import { FC, useEffect, useRef } from 'react'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { AliOSSSuffix } from 'src/shared/constants'

interface Props {
  title: string
  posterUrl: string
}

const LazyLoadImage: FC<Props> = ({ title, posterUrl }) => {
  const lazyLoadImageWrapperRef = useRef<HTMLDivElement>(null)
  const initProgressiveImage = () => {
    const classReplace = 'replace'
    const classPreview = 'preview'
    const classReveal = 'reveal'

    const pItem = document.getElementsByClassName(`progressive ${classReplace}`)

    const rAF = window.requestAnimationFrame

    let timer: null | NodeJS.Timeout = null

    function loadFullImage(item: HTMLElement, retry = 0) {
      item.classList.remove(classReplace)

      const href = item.getAttribute('data-href')
      const pImg: HTMLImageElement | null = item.querySelector(
        `img.${classPreview}`,
      )

      if (!href || !pImg) return

      const img = new Image()
      const ds = item.dataset

      if (ds) {
        if (ds.srcset) img.srcset = ds.srcset
        if (ds.sizes) img.sizes = ds.sizes
      }

      function addImg() {
        if (!pImg) return

        const imgClass = img.classList
        img.className = pImg.className
        imgClass.remove(classPreview)
        imgClass.add(classReveal)
        img.alt = pImg.alt || ''

        rAF(() => {
          item
            .insertBefore(img, pImg.nextSibling)
            .addEventListener('animationend', () => {
              item.removeChild(pImg)
              imgClass.remove(classReveal)
            })
        })
      }

      img.onload = addImg

      if (retry < 2)
        img.onerror = () => {
          setTimeout(() => {
            loadFullImage(item, retry + 1)
          }, (retry + 1) * 3000)
        }

      img.src = href
    }

    function inView() {
      if (pItem.length)
        rAF(() => {
          const wH = window.innerHeight
          let cRect = null
          let cT
          let cH
          let p = 0
          while (p < pItem.length) {
            cRect = pItem[p].getBoundingClientRect()
            cT = cRect.top
            cH = cRect.height

            if (cT + cH > 0 && wH > cT) {
              loadFullImage(pItem[p] as HTMLElement)
            } else {
              p += 1
            }
          }
        })
    }

    function throttle() {
      timer =
        timer ||
        setTimeout(() => {
          timer = null
          inView()
        }, 300)
    }

    const observer = new MutationObserver(throttle)
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
    })

    inView()
  }

  useEffect(() => {
    initProgressiveImage()
  }, [])
  return (
    <div
      data-href={posterUrl}
      className="progressive replace"
      ref={lazyLoadImageWrapperRef}
    >
      <img
        src={`${posterUrl}${generateAliOSSSuffix(AliOSSSuffix.TINY_SUFFIX)}`}
        className="preview"
        alt={title}
        loading="lazy"
      />
    </div>
  )
}

export default LazyLoadImage
