import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Portfolio from './components/Portfolio';
import SkillsExperience from './components/SkillsExperience';
import Sidebar from './components/Sidebar';

import './styles/App.css';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Sidebar />
      <div className='main'>
        <div className='inner'>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/portfolio' element={<Portfolio />} />
            <Route
              path='/skills-and-experience'
              element={<SkillsExperience />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
