import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from './components/Contact';

function App(){
  return (
    <Router>
      <div className="">
        <Navbar/>
        <Hero 
          alias="Uchechukwu Alih"
          tagline="A super quick learner, try me"
          imageUrl="/src/assets/profile-pic-dark.jpg"
          altText="this image of me was taken by my senior friend in my freshman year"
        />
        <Projects/>
        <Contact/>
        {/* Other sections will go here */}
      </div>
    </Router>
  );
};

export default App;