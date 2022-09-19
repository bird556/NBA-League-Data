import Router from 'next/router';
import '@fontsource/poppins';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/styles.scss';
import '../styles/globals.scss';
import '../styles/nprogress.css';
import theme from '..//chakra-theme/theme';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Lineloader from '../components/loader/Lineloader';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  NProgress.configure({ showSpinner: false, easing: 'ease', speed: 300 });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Lineloader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
    </>
  );
}

export default MyApp;
