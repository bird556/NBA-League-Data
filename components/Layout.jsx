import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NBA League Data</title>
        <meta
          name="description"
          content="Get live updates on NBA games in real-time, explore player and team info."
        />
        <meta
          name="keywords"
          content="NBA, Live Updates, NBA Player Info, NBA Team Info, Basketball"
        />
        <meta name="author" content="Shaun Bennett" />
        <meta property="og:title" content="NBA League Data" />
        <meta
          property="og:description"
          content="Get live updates on NBA games in real-time, explore player and team info."
        />
        <meta
          property="og:image"
          content="https://nbaleague-black.vercel.app/75th.png"
        />
        <meta property="og:url" content="https://nbaleague-black.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NBA League Data" />
        <meta
          name="twitter:description"
          content="Get live updates on NBA games in real-time, explore player and team info."
        />
        <meta
          name="twitter:image"
          content="https://nbaleague-black.vercel.app/75th.png"
        />
        <link rel="icon" href="/75th.png" />
      </Head>
      <div className="container">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;

export const metadata = {
  metadataBase: new URL('https://nbaleague-black.vercel.app/'), // Replace with your actual live URL
  title: 'NBA League Data',
  description:
    'Stay up-to-date with live NBA game updates, explore player profiles, and view team information in real-time.',
  keywords: 'NBA, Live Updates, Player Info, Team Info, Basketball',
  authors: [
    { name: 'Shaun Bennett', url: 'https://nbaleague-black.vercel.app/' },
  ],
  openGraph: {
    title: 'NBA League Data',
    description:
      'Stay up-to-date with live NBA game updates, explore player profiles, and view team information in real-time.',
    url: 'https://nbaleague-black.vercel.app/',
    siteName: 'NBA League Data',
    images: [
      {
        url: '/75th.png',
        width: 1200,
        height: 1024,
        alt: '75th NBA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBA League Data',
    description:
      'Stay up-to-date with live NBA game updates, explore player profiles, and view team information in real-time.',
    images: ['/75th.png'],
  },
};
