import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Portfolio from './components/Portfolio';
import SkillsExperience from './components/SkillsExperience';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import './styles/App.scss';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Sidebar />
      <div className='main'>
        <div className='inner'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about-me' element={<About />} />
            <Route
              path='/skills-and-experience'
              element={<SkillsExperience />}
            />
            <Route path='/contact-me' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
