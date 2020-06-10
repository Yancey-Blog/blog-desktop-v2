import React, { FC, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { hotjar } from 'react-hotjar'
import { initGA, logPageView } from 'src/shared/analytics'
import { HOTJAR_ID, HOTJAR_SV } from 'src/shared/constants'
import Head from 'src/components/Head/Head'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import BackToTop from 'src/components/BackToTop/BackToTop'
import SVGSprite from 'src/components/SVGSprite/SVGSprite'
import { GET_GLOBAL_SETTING } from 'src/containers/GlobalSetting/typeDefs'
import { GlobalSettingQuery } from 'src/containers/GlobalSetting/types'
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

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView()

    hotjar.initialize(HOTJAR_ID, HOTJAR_SV)
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
      <SVGSprite />
      <BackToTop />
    </Layouts>
  )
}

export default Layout
