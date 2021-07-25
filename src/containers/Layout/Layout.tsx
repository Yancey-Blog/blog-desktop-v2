import { FC, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { hotjar } from 'react-hotjar'
import throttle from 'lodash.throttle'
import { initGA, logPageView } from 'src/shared/analytics'
import { BACK_TO_TOP_THRESHOLD } from 'src/shared/constants'
import SVGSprite from 'src/components/SVGSprite/SVGSprite'
import AlgoliaSearchBox from 'src/containers/Post/components/AlgoliaSearchBox/AlgoliaSearchBox'
import { GET_GLOBAL_SETTING } from 'src/containers/GlobalSetting/typeDefs'
import { GlobalSettingQuery } from 'src/containers/GlobalSetting/types'
import Head from 'src/components/Head/Head'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import BackToTop from './components/BackToTop/BackToTop'
import { Layouts, Main } from './styled'

const initialGlobalSetting = {
  cvPostId: '',
  releasePostId: '',
  isGrayTheme: false,
}

interface Props {
  title?: string
}

const Layout: FC<Props> = ({ title, children }) => {
  const { data } = useQuery<GlobalSettingQuery>(GET_GLOBAL_SETTING)

  const [scrollTopCount, setScrollTopCount] = useState(0)

  const scrollTopCountHandler = throttle(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    setScrollTopCount(top)
  }, 100)

  useEffect(() => {
    document.addEventListener('scroll', scrollTopCountHandler, {
      passive: true,
    })

    return () => {
      document.removeEventListener('scroll', scrollTopCountHandler)
    }
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }

      logPageView()

      hotjar.initialize(
        parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID, 10),
        parseInt(process.env.NEXT_PUBLIC_HOTJAR_SV, 10),
      )
    }
  }, [])

  return (
    <Layouts>
      <Head title={title} />
      <Header
        globalSetting={data ? data.getGlobalSetting : initialGlobalSetting}
      />
      <Main>{children}</Main>
      <Footer
        globalSetting={data ? data.getGlobalSetting : initialGlobalSetting}
      />
      <Nav />
      <SVGSprite />
      <BackToTop isShowCat={scrollTopCount >= BACK_TO_TOP_THRESHOLD} />
      <AlgoliaSearchBox />
    </Layouts>
  )
}

export default Layout
