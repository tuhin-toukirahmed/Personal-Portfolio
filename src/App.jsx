 import React from 'react';
 import Banner from './Section/Banner';
import Navbar from './Components/Navbar';
import ProfileImg from './Components/ProfileImg';
import About from './Section/About';
import Education from './Section/Education';
import Projects from './Section/Projects';
import Contact from './Section/Contact';

 const App = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Education />
        <Contact />
     </div>
  );
 };
 
 export default App;