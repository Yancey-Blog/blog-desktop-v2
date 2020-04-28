import React, { FC, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { initGA, logPageView } from 'src/shared/analytics'
import Head from 'src/components/Head/Head'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import BackToTop from 'src/components/BackToTop/BackToTop'
import { GET_GLOBAL_SETTING } from 'src/containers/GlobalSetting/typeDefs'
import { GlobalSettingQuery } from 'src/containers/GlobalSetting/types'
// import { checkWebp } from 'yancey-js-util'
import { Layouts, Main } from './styled'

const initialGlobalSetting = {
  cvPostId: '',
  releasePostId: '',
  isGrayTheme: false,
}

const Layout: FC = ({ children }) => {
  const { data } = useQuery<GlobalSettingQuery>(GET_GLOBAL_SETTING)

  useEffect(() => {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA()
      // @ts-ignore
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  // useEffect(() => {
  //   if (checkWebp()) {
  //     window.localStorage.setItem('webp', 'enable')
  //   }
  // }, [])

  return (
    <Layouts>
      <Head />
      <Header
        globalSetting={data ? data.getGlobalSetting : initialGlobalSetting}
      />
      <Main>{children}</Main>
      <Footer
        globalSetting={data ? data.getGlobalSetting : initialGlobalSetting}
      />
      <BackToTop />
    </Layouts>
  )
}

export default Layout
