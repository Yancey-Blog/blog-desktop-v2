import React, { FC, useRef, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import APlayer from 'aplayer'
import { ALI_OSS_SUFFIX } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { PLAYERS } from '../typeDefs'
import { PlayerQuery } from '../types'

const Player: FC = () => {
  const { data } = useQuery<PlayerQuery>(PLAYERS)
  const plyaerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (data && plyaerRef && plyaerRef.current) {
      const ap = new APlayer({
        container: plyaerRef.current,
        fixed: true,
        lrcType: 1,
        audio: data.players.map((musicTrack) => {
          const { title, artist, lrc, coverUrl, musicFileUrl } = musicTrack
          return {
            name: title,
            artist,
            url: musicFileUrl,
            cover: `${coverUrl}${generateAliOSSSuffix(
              ALI_OSS_SUFFIX.THUMB_SUFFIX,
            )}`,
            lrc,
          }
        }),
      })
      ap.lrc.show()
    }
  }, [data, plyaerRef])

  return <div ref={plyaerRef} />
}

export default Player
