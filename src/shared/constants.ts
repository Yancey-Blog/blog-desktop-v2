import { SnackbarOrigin, SocialMedia } from './types'

export const SNACKBAR_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'center',
}

export const SNACKBAR_MAX_NUM = 1

export const SNACKBAR_AUTO_HIDE_DURATION = 3000

export const BACK_TO_TOP_THRESHOLD = 800

export const DOMAIN = 'https://yanceyleo.com'

export const ALI_OSS_URL = 'https://static.yancey.app'

export const ALI_OSS_SUFFIX_BASE = '?x-oss-process=image'

export enum AliOSSSuffix {
  WEBP_SUFFIX = '/format,webp',
  THUMB_SUFFIX = '/resize,w_120',
  LOW_QUALITY_SUFFIX = '/quality,Q_10',
}

export const GA = 'UA-114532340-1'

export const SENTRY =
  'https://5f39329950504b4bbc8cd6e9fe3f8c79@o265404.ingest.sentry.io/5417352'

export const HOTJAR_ID = 1514017

export const HOTJAR_SV = 6

export const DISCUSSION_KEY = 'yancey-blog'

export const SVG_SPRITE = {
  soundcloud: '#soundcloud',
  twitter: '#twitter',
  paypal: '#paypal',
  github: '#github',
  email: '#email',
  telegram: '#telegram',
  wechat: '#wechat',
  linkedin: '#linkedin',
  facebook: '#facebook',
  instagram: '#instagram',
  fire: '#flame',
  new: '#new',
  heart: '#heart',
  emptyHeart: '#passion',
  tag: '#price-tag',
  topRank: '#popularity',
  moon: '#moon',
  sun: '#sun',
  announcement: '#megaphone',
  home: '#home',
  blog: '#pencil',
  music: '#music',
  cv: '#resume-and-cv',
  search: '#magnifying-glass',
  clock: '#clock',
  eye: '#eye',
  like: '#like',
  folder: '#closed-container',
  archive: '#archive',
  more: '#menu',
}

export const SOCIAL_MEDIA: SocialMedia = {
  github: {
    url: 'https://github.com/YanceyOfficial/',
    icon: SVG_SPRITE.github,
  },
  twitter: {
    url: 'https://twitter.com/YanceyOfficial/',
    icon: SVG_SPRITE.twitter,
  },
  instagram: {
    url: 'https://www.instagram.com/yancey_leo/',
    icon: SVG_SPRITE.instagram,
  },
  soundCloud: {
    url: 'https://soundcloud.com/yancey-leo/',
    icon: SVG_SPRITE.soundcloud,
  },
  telegram: {
    url: 'https://t.me/YanceyOfficial',
    icon: SVG_SPRITE.telegram,
  },
  paypal: {
    url: 'https://www.paypal.me/yanceyleo/10usd',
    icon: SVG_SPRITE.paypal,
  },
  wechat: {
    url: '/',
    icon: SVG_SPRITE.wechat,
  },
  email: {
    url: 'mailto:yanceyofficial@gmail.com',
    icon: SVG_SPRITE.email,
  },
}
