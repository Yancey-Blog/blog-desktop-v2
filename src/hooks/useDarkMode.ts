import { useEffect, useState } from 'react'

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState(ThemeMode.LIGHT)
  const toggleTheme = () => {
    if (theme === ThemeMode.LIGHT) {
      window.localStorage.setItem('theme', ThemeMode.DARK)
      setTheme(ThemeMode.DARK)
    } else {
      window.localStorage.setItem('theme', ThemeMode.LIGHT)
      setTheme(ThemeMode.LIGHT)
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeMode | null
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
