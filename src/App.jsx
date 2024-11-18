import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import Headroom from 'react-headroom';
import Navbar from './Component/Navbar.jsx';
import HomePage from './Homepage/Homepage.jsx';
import Privacypolicy from './Policypages/Privacypolicy.jsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Headroom>
          <Navbar />
        </Headroom>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={isLoading ? <Loader /> : null}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/Privacypolicy" element={
            <Suspense fallback={isLoading ? <Loader /> : null}>
              <Privacypolicy />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={isLoading ? <Loader /> : null}>
              <Navigate to="/" />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
