import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Project from './components/projects/Projects';
import Service from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
