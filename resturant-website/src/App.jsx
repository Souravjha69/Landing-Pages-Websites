import About from "./components/About";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
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
        <Review/>
      </div>
    </>
  );
}
export default App;
