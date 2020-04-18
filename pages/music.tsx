import React, { useEffect } from 'react'
import Layout from 'src/containers/Layout/Layout'
import MusicContainer from 'src/containers/Music/MusicContainer'

const Music = () => {
  useEffect(() => {
    document.title = 'ミュージック | Yancey Inc.'
  }, [])
  return (
    <Layout>
      <MusicContainer />
    </Layout>
  )
}

export default Music
