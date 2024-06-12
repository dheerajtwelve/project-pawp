import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Objectives from './components/Objectives';
import OfficeBearers from './components/OfficeBearers';
import Footer from './components/Footer';
import Organisation from './components/Organisation';
import Enroll from './components/Enroll';
import './output.css';
function App() {
  return (
    <div className="App">
    <body>
      <Header />
      <Main />
      <About />
      <Organisation />
      <Objectives />
      <OfficeBearers />
      <Enroll />
      <Footer />
    </body>
    </div>
  );
}

export default App;
