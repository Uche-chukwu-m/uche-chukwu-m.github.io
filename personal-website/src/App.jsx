// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from './components/Contact';

function App(){
  return (
    <div className="bg-slate-900">
      <Navbar/>
      <main>
        <div id='home'>
          <Hero 
            alias="Uchechukwu Alih"
            tagline="A super quick learner, try me"
            altText="this image of me was taken by my senior friend in my freshman year"
          />
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      {/* Other sections will go here */}
      </main>
    </div>
    
  );
};

export default App;