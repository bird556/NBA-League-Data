import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => (
  <>
    <Head>
      <title>NBA League Data</title>
      <meta name="description" content="Generated by create next app" />
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

export default Layout;
