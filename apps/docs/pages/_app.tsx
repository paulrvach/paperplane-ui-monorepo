import '../styles.css'
import type { AppProps } from 'next/app'
import {Badge} from 'ui'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}