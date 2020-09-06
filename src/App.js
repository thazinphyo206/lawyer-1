import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Header from './components/Header/Header'
import Home from './view/Home/Home'
import AboutUs from './view/AboutUs/AboutUs'
import LawFirm from './view/LawFirm/LawFirm'
import LawSchool from './view/LawSchool/LawSchool'
import News from './view/News/News'
import NewsDetails from './view/NewsDetails/NewsDetails'
import ContactUs from './view/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/law-firm" component={LawFirm}/>
        <Route path="/law-school" component={LawSchool}/>
        <Route path="/news" component={News}/>
        <Route path="/news-details" component={NewsDetails}/>
        <Route path="/contact" component={ContactUs}/>
        <Footer/>
    </Router>
  )
}

export default App;
