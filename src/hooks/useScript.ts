import { useEffect } from 'react'

export const useScriptUrl = (
  url: string,
  isAsync = true,
  $parentEl?: HTMLElement,
) => {
  useEffect(() => {
    const $scriptEl = document.createElement('script')

    $scriptEl.src = url
    if (isAsync) $scriptEl.async = true
    ;(!$parentEl ? document.body : $parentEl).appendChild($scriptEl)

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(!$parentEl ? document.body : $parentEl).removeChild($scriptEl)
    }
  }, [$parentEl, url, isAsync])
}

export const useScript = (content: string, $parentEl?: HTMLElement) => {
  useEffect(() => {
    const $scriptEl = document.createElement('script')

    $scriptEl.innerHTML = content
    ;(!$parentEl ? document.body : $parentEl).appendChild($scriptEl)
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(!$parentEl ? document.body : $parentEl).removeChild($scriptEl)
    }
  }, [$parentEl, content])
}
