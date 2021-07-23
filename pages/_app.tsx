import { AppProps } from 'next/app'
import Navbar from '../components/sections/Navbar'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />

      <div className='container mx-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
