import { FC, useEffect, useRef } from 'react'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { AliOSSSuffix } from 'src/shared/constants'

interface Props {
  title: string
  posterUrl: string
}

const LazyLoadImage: FC<Props> = ({ title, posterUrl }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const initProgressiveImage = () => {
    const classReplace = 'replace'
    const classPreview = 'preview'
    const classReveal = 'reveal'

    const rAF = window.requestAnimationFrame

    let timer: null | NodeJS.Timeout = null

    function loadFullImage($wrapperel: HTMLElement) {
      $wrapperel.classList.remove(classReplace)

      const href = $wrapperel.getAttribute('data-href')
      const pImg: HTMLImageElement | null = $wrapperel.querySelector(
        `img.${classPreview}`,
      )

      if (!href || !pImg) return

      const img = new Image()
      const {
        dataset: { srcset, sizes },
      } = $wrapperel

      if (srcset) img.srcset = srcset
      if (sizes) img.sizes = sizes

      function addImg() {
        if (!pImg) return

        const imgClass = img.classList
        img.className = pImg.className
        imgClass.remove(classPreview)
        imgClass.add(classReveal)
        img.alt = pImg.alt || ''

        $wrapperel
          .insertBefore(img, pImg.nextSibling)
          .addEventListener('animationend', () => {
            console.log($wrapperel)
            $wrapperel.removeChild(pImg)
            imgClass.remove(classReveal)
          })
      }

      img.onload = addImg

      img.src = href
    }

    function inView() {
      rAF(() => {
        if (!wrapperRef || !wrapperRef.current) return

        const { top, height } = wrapperRef.current.getBoundingClientRect()
        if (top + height > 0 && window.innerHeight > top) {
          loadFullImage(wrapperRef.current)
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
    <div data-href={posterUrl} className="progressive replace" ref={wrapperRef}>
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
