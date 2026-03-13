import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import QuickActions from './components/QuickActions';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Clients from './sections/clients';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        {/* <WhyUs /> */}
        <Clients />
        {/* <Contact /> */}
      </main>
      <Footer />
      <ChatBox />
      <QuickActions />
    </div>
  );
}
