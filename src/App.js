import Navbar from "./components/Navbar";
import { About, Contact, Footer, Home, Project, Tech } from "./containers";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="wavy sm:text-3xl text-xl font-semibold">
            <span style={{ "--i": 1 }}>F</span>
            <span style={{ "--i": 2 }}>b</span>
            <span style={{ "--i": 3 }}>.</span>
            <span style={{ "--i": 4 }}>.</span>
            <span style={{ "--i": 5 }}>.</span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Tech />
          <Project />
          <Contact />
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
