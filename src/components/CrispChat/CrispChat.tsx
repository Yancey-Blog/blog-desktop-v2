import { FC, useEffect } from 'react'
import { useScriptUrl } from 'src/hooks/useScript'

const CrispChat: FC = () => {
  useScriptUrl('https://client.crisp.chat/l.js')

  useEffect(() => {
    window.$crisp = [['safe', true]]
    window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
  }, [])
  return <div />
}

export default CrispChat
