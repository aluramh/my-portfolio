import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div className='container mx-auto'>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
