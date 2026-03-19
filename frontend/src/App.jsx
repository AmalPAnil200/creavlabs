import './index.css';
import { Routes, Route } from 'react-router-dom';

// Layout shell (Navbar + Outlet + Footer)
import PageShell from './components/layout/layout';

// Shared components (used inside HomePage directly)
import ChatBox from './components/ChatBox';
import QuickActions from './components/QuickActions';

// Home page sections
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Clients from './sections/clients';

// Standalone pages (each manages its own Navbar + Footer internally)
import ServicesPage from './sections/pages/Services';
import SolutionPage from './sections/pages/solution';
import ShowcasePage from './sections/pages/showcase';
import PublicPage from './sections/pages/public';
import ContactPage from './sections/pages/contact';
import AboutPage from './sections/pages/about';

/* ─────────────────────────────────────  
   Home page content
───────────────────────────────────── */
function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Process />
      <Testimonials />
      <Clients />
    </>
  );
}

/* ─────────────────────────────────────
   App — routing lives here.
   BrowserRouter is provided by main.jsx.
───────────────────────────────────── */
export default function App() {
  return (
    <>
      <ChatBox />
      <QuickActions />

      <Routes>
        {/* Routes that use the shared Navbar + Footer shell */}
        <Route element={<PageShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/public" element={<PublicPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Standalone pages — each has its own Navbar + Footer */}
      </Routes>
    </>

  );
}
