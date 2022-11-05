import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./Pages/ProjectDisplay";
import ContactMe from "./Pages/ContactMe";
import PersonalGraphs from "./Pages/PersonalGraphs";

function App() {
  /**
   * Navbar: navbar will change the page (change path) upon clicking  <LinK to>
   * Routes: display the page depending on the path
   * Footer: misc
   * Contact Me Page: recieve user form data
   */
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/portfolio" element={<Home />} />
            {/* <Route path="/about" element={}/> */}
            <Route exact path="/projects" element={<Projects />} />
            {/* different routes for projects:  */}
            <Route exact path="/project/:id" element={<ProjectDisplay />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/PersonalGraphs" element={<PersonalGraphs />} />
            <Route exact path="/Contact" element={<ContactMe />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
