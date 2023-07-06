import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

const navbarHeight = 40;

export const App = () => (
  <Router>
    <Navbar navbarHeight={navbarHeight} />
    <Routes>
      <Route element={<Home navbarHeight={navbarHeight} /> } path="/" />
      <Route element={<Navigate to="/" replace />} path="*" />
    </Routes>
    <Footer navbarHeight={navbarHeight} />
  </Router>
);
