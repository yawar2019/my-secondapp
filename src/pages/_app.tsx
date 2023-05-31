import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { _Layout } from './_Layout'
export default function App({ Component, pageProps }: AppProps) {

  return (
 <_Layout> 
  <Component {...pageProps} />
  </_Layout> 
 
)}
