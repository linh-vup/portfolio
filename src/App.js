import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/Projects';
import SkillsExperience from './components/SkillsExperience';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.scss';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className='main'>
        <div className='inner'>
          <Routes>
            <Route path='/' element={<Projects />} />
            <Route path='/about-me' element={<About />} />
            <Route
              path='/skills-and-experience'
              element={<SkillsExperience />}
            />
            <Route path='/contact-me' element={<Contact />} />
            <Route path='*' element={<p>Oops, page not found</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
