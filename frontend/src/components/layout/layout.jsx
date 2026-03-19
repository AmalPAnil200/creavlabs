import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

// PageShell wraps pages that need the shared Navbar + Footer.
// Used as a layout route in App.jsx.
const PageShell = () => (
  <div className="min-h-screen bg-dark text-white flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet /> {/* child route renders here */}
    </main>
    <Footer />
  </div>
);

export default PageShell;