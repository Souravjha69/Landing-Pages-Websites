import About from "./components/About";
import Dishes from "./components/Dishes";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./index.css"
function App () {
  return (
    <>
    <div className="overflow-y-hidden text-neutral-200 antialiased">
    <HeroSection/>
    <Navbar/>
    <Dishes/>
    <About/>
    </div>
    </>
  );
}
export default App;