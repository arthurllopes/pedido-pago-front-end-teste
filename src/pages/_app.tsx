import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavigationContextProvider } from '../context/NavigationContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationContextProvider>
      <Component {...pageProps} />
    </NavigationContextProvider>
    )
}

export default MyApp
