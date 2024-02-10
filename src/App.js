import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from './components/Main';
import Menu from './components/Menu';
import Testimonial from './components/Testimonials';
import About from './components/About'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Menu />
      <Testimonial />
      <About />
      <Footer/>
    </>
  );
}

export default App;