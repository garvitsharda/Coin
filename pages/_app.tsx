import '../styles/globals.css'
import type { AppProps } from 'next/app'


import { AuthProvider } from '../AuthContext/AuthProvider';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <ToastContainer/>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
