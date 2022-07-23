import React from 'react'
import "./MainPage.scss";
import MetamaskConnect from '../MetamaskConnect/MetamaskConnect';
import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';

const MainPage = () => {
  return (
    <div className='main'>
      <MetamaskConnect />
      <Intro />
      <Tab />
      <Footer />
    </div>
  )
}

export default MainPage