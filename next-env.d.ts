/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  import { SFC, SVGProps } from 'react'

  export const ReactComponent: SFC<SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

declare module '*.cur' {
  const src: string
  export default src
}

declare module 'aplayer' {
  interface Audio {
    name: string
    url: string
    cover: string
    lrc: string
  }
  interface Props {
    container: HTMLElement
    lrcType: number
    fixed: boolean
    audio: Audio[]
  }
  class APlayer {
    constructor({ container, lrcType, fixed, audio }: Props) {}
    public lrc: { show: Function }
  }

  export default APlayer
}

interface Window {
  ga: Function
  GA_INITIALIZED: boolean
  CRISP_WEBSITE_ID: string
  $crisp: any[]
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_DOMAIN_URL: string
    NEXT_PUBLIC_STATIC_FILE_URL: string
    NEXT_PUBLIC_GA_KEY: string
    NEXT_PUBLIC_SENTRY_DSN: string
    NEXT_PUBLIC_HOTJAR_ID: string
    NEXT_PUBLIC_HOTJAR_SV: string
    NEXT_PUBLIC_DISCUSSION_KEY: string
    NEXT_PUBLIC_ALGOLIA_SEARCH_APP_ID: string
    NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: string
    NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME: string
    NEXT_PUBLIC_CRISP_WEBSITE_ID: string
  }
}

declare const __YANCEY_BLOG_VERSION__: string
declare const __GIT_HASH__: string
