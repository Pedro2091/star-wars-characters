import { ConfigProvider } from 'antd'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
