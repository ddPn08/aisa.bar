import './global.css'

import { Header } from '@/components/header'
import { k } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Metadata } from 'next'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({ weight: '700', subsets: ['latin'] })

const title = 'AIさばー'
const description = 'なんかそんなかんじのマインクラフトサーバー'

export const metadata: Metadata = {
  metadataBase: new URL('https://aisa.bar'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://aisa.bar',
    siteName: 'aisa.bar',
    type: 'website',
    images: ['favicon.png'],
  },
  twitter: {
    card: 'summary',
    creator: '@ddPn08',
  },
  icons: {
    icon: 'favicon.png',
    apple: 'favicon.png',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <KumaRegistry>
          <NextTopLoader />
          <k.div
            bg={'colors.primary'}
            m={'0'}
            width={'100vw'}
            minHeight={'100vh'}
            className={zen_kaku_gothic_new.className}
          >
            <Header />
            {children}
          </k.div>
        </KumaRegistry>
      </body>
    </html>
  )
}

export default RootLayout
