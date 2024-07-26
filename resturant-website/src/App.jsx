import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./index.css"
function App () {
  return (
    <>
    <div className="overflow-y-hidden text-neutral-200 antialiased">
    <HeroSection/>
    <Navbar/>
    </div>
    </>
  );
}
export default App;