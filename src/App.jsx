import './App.css';
import Navbar   from './components/Navbar/Navbar';
import Hero     from './components/Hero/Hero';
import About    from './components/About/About';
import Projects from './components/Projects/Projects';
import Awards   from './components/Awards/Awards';
import Team     from './components/Team/Team';
import Join     from './components/Join/Join';
import Footer   from './components/Footer/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Team />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
