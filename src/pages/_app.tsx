import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer } from 'react-toastify';

function StudyTime({ Component, pageProps }: AppProps) {

  if (typeof document !== 'undefined') {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(theme);
  }

  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <ToastContainer
        position='bottom-right'
        autoClose={2500}
      />
    </>
  );
}

export default StudyTime;
