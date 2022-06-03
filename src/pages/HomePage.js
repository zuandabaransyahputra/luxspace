import Clients from 'parts/Clients';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import JustArrived from 'parts/HomePage/JustArrived';
import SiteMap from 'parts/SiteMap';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Header theme={"white"} position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
};

export default HomePage;
