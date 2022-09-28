import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./Pages/ProjectDisplay";

function App() {
  /**
   * Navbar: navbar will change the page (change path) upon clicking  <LinK to>
   * Routes: display the page depending on the path
   * Footer: misc
   */
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={}/> */}
            <Route path="/projects" element={<Projects />} />
            {/* different routes for projects:  */}
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
            {/* <Route path="/contact" element={}/> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
