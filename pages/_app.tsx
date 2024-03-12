import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import {SherlockProvider} from "../context/SherlockContext";
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <SherlockProvider>
     <Component {...pageProps} />
  </SherlockProvider>
    )
   
}

export default MyApp
