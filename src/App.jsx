import { Routes, Route } from 'react-router-dom';

import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import TrivvyHome from './pages/TrivvyHome';
import MusicTrivvy from './pages/MusicTrivvy';
import GameTrivvy from './pages/GameTrivvy';
import FilmTrivvy from './pages/FilmTrivvy';
import TelevisionTrivvy from './pages/TelevisionTrivvy';
import AnimalTrivvy from './pages/AnimalTrivvy';

function App() {
  return (
    <div>
      <>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<TrivvyHome />} />
          <Route path="music" element={<MusicTrivvy />} />
          <Route path="game" element={<GameTrivvy />} />
          <Route path="film" element={<FilmTrivvy />} />
          <Route path="television" element={<TelevisionTrivvy />} />
          <Route path="animal" element={<AnimalTrivvy />} />
        </Routes>
        <Footer />
      </>
    </div>
  )
}

export default App;