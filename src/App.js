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
      <Navbar />
      <Headline />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
