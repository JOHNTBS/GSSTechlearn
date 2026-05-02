/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, FloatingOrbs } from './components/Shared';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';

// --- Scroll to Top on Page Change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden">
        <ScrollToTop />
        <FloatingOrbs />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
