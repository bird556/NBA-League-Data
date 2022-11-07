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
          content="Get your live update on NBA Games in real-time, search for player info & team info."
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
