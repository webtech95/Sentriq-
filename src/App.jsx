import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Platform from "./components/pages/Platform";
import Solutions from "./components/pages/Solutions";
import Pricing from "./components/pages/Pricing";
import Waitlist from "./components/pages/Waitlist";
import Footer from "./components/Footer";
import WaitlistCTA from "./components/WaitlistCTA";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
      <WaitlistCTA />
      <Footer />
    </>
  );
}

export default App;