import '@/styles/index.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
