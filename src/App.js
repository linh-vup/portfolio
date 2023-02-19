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
      {/* <Header /> */}
      <Sidebar />
      <div className='main'>
        <div className='inner'>
          <Routes>
            <Route path='/' element={<Projects />} />
            {/* <Route path='/projects' element={<Projects />} /> */}
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
