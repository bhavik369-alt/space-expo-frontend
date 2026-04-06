import { useEffect, useState } from "react";
import './index.css';
import StarCanvas from './components/StarCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import FeaturedTopics from './components/FeaturedTopics';
import AboutExperience from './components/AboutExperience';
import Footer from './components/Footer';

function App() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/topics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopics(data);
      });
  }, []);
  return (
    <>
      {/* Fixed background layers */}
      <StarCanvas />
      <CustomCursor />

      {/* Page layout */}
      <div className="relative min-h-screen" style={{ background: 'transparent' }}>
        <Navbar />
        <main>
          <Hero />
          <MarqueeStrip />
          <FeaturedTopics topics={topics} />
          <MarqueeStrip />
          <AboutExperience />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
