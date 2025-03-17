import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

import { AppWrapper } from './App.css';
import { Experiences } from './pages/Experiences';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;