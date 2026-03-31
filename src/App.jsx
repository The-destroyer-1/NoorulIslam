import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Prayer from './pages/Prayer.jsx';
import Adhkar from './pages/Adhkar.jsx';
import Quran from './pages/Quran.jsx';
import Hadith from './pages/Hadith.jsx';
import Team from './pages/Team.jsx';
import Dua from './pages/Dua.jsx';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="site-header">
          <div className="brand-bar">
            <span className="brand-icon">🕌</span>
            <div>
              <h1>NoorulIslam</h1>
            
            </div>
          </div>

          <nav className="site-nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/quran">Quran</NavLink>
            <NavLink to="/hadith">Hadith</NavLink>
            <NavLink to="/dua">Dua</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/prayer">Prayer</NavLink>
            <NavLink to="/adhkar">Adhkar</NavLink>
          </nav>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/hadith" element={<Hadith />} />
            <Route path="/dua" element={<Dua />} />
            <Route path="/team" element={<Team />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/adhkar" element={<Adhkar />} />
          </Routes>
        </main>

        <footer className="site-footer">
          © 2026 NoorulIslam. Built for a modern Islamic experience.
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
