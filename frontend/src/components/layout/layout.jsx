import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

/**
 * ScrollToTop Logic
 * This sub-component ensures that whenever the URL (pathname) changes,
 * the browser window snaps back to the top.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main Layout Wrapper
const PageShell = () => (
  <div className="min-h-screen bg-dark text-white flex flex-col">
    {/* 1. Logic Component: Handled invisible scroll reset */}
    <ScrollToTop />

    {/* 2. Persistent UI: Stays visible during transitions */}
    <Navbar />
    
    {/* 3. Dynamic UI: Changes based on the URL */}
    <main className="flex-1">
      <Outlet /> 
    </main>
    
    {/* 4. Persistent UI */}
    <Footer />
  </div>
);

export default PageShell;