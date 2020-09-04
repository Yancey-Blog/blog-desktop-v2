import ReactGA from 'react-ga'

export const initGA = () => {
  const { NEXT_PUBLIC_GA_KEY } = process.env

  if (NEXT_PUBLIC_GA_KEY) {
    ReactGA.initialize(NEXT_PUBLIC_GA_KEY)
  }
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
