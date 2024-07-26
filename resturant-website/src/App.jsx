import About from "./components/About";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div className="overflow-y-hidden text-neutral-200 antialiased">
        <HeroSection />
        <Navbar />
        <Dishes />
        <About />
        <Mission />
        <Expertise/>
      </div>
    </>
  );
}
export default App;
