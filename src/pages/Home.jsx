import React from 'react';
import MostPicked from '../components/MostPicked';
import OurStory from '../components/OurStory';
import Testimonies from '../components/Testimonies';
import News from '../components/News';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <MostPicked />
      <OurStory />
      <Testimonies />
      <News />
      <Footer />
    </>
  );
};

export default Home;

