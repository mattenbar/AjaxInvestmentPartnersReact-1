import React from 'react';

import './fonts/Normal-Regular.ttf'
import './fonts/Normal-Regular.otf'
import './fonts/Normal-ExtraBold.ttf'
import './fonts/Normal-ExtraBold.otf'
import './images/AjaxWebsiteTopImage.jpg'
import './images/BlueMountainBottomImg.jpg'

import './App.css';
import Header from './components/header'
import AboutUs from './components/aboutUs.js'
import Capabilities from './components/capabilities'
import Leadership from './components/leadership'
import Footer from './components/footer'
import BlueMountains from './components/blueMountains'
import News from './components/news.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <AboutUs />
      <Capabilities className="capabilities" />
      <News className="news" />
      <BlueMountains />
      <Leadership className="leadership" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
