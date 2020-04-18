import { useEffect, useState } from 'react'

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode('light')
    }
    setComponentMounted(true)
  }, [])

  return { theme, toggleTheme, componentMounted }
}
