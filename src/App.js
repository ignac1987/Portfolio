import Main from "./Components/Main";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OverView from "./Components/OverView";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Foot from "./Components/Foot";

function App() {
  return (
    <div className=" flex flex-col overflow-x-hidden ">
      
      <div className="min-h-screen flex flex-col justify-center">
      
        <div className="absolute w-screen">
          <Navbar/>
        </div>

        <div className="absolute">
          <Main/>
        </div>

        <div className="relative">
          <About/>
        </div>

      </div>

      <div className="flex flex-col relative bg-white">
        <OverView/>
        <Projects/>
        <Contact/>
        <Foot/>
      </div>     

    </div>
  );
}

export default App;