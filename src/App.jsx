 import React from 'react';
 import Banner from './Section/Banner';
import Navbar from './Components/Navbar';
 import About from './Section/About';
import Education from './Section/Education';
import Projects from './Section/Projects';
import Contact from './Section/Contact';
import Footer from './Components/Footer';

 const App = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Education />
        <Contact />
        <Footer />
     </div>
  );
 };
 
 export default App;