import '../styles.css';
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';
import { Theme } from '@radix-ui/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme accentColor='amber'>
      <Component {...pageProps} />
    </Theme>
  );
}
