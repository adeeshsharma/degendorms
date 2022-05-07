import "./App.css";
import Hero from "components/Hero";
import About from "components/About";
import Collection from "components/Collection";
import Acquire from "components/Acquire";
import Team from "components/Team";
import Nerds from "components/Nerds";
import Roadmap from "components/Roadmap";
import FAQ from "components/FAQ";
import Footer from "components/Footer";
import Preloader from "assets/videos/preloader.mp4";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  return (
    <main className="app">
      {loading && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black w-screen h-screen grid place-items-center">
          <video className="h-[40vh] w-[40vw]" autoPlay loop muted>
            <source src={Preloader} type="video/mp4" />
          </video>
        </div>
      )}
      <Hero />
      <About />
      <Collection />
      <Acquire />
      <Team />
      <Nerds />
      <Roadmap />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
