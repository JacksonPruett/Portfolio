import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Headline from "./components/Headline";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import Experience from "./components/Experience.js";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="flex-app">
        <div className="nav">
          <Navbar />
        </div>
        <div className="content">
          <Headline />
          <div className="about-me">
            <About />
          </div>
            <Experience />
          <Projects />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
