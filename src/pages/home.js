import React from 'react';
import Carousel from '../components/carousel/'
import Header from '../components/header'
import Main from '../components/main'

function Home() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Main />
    </div>
  );
}

export default Home;
