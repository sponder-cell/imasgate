import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import CareSupport from "./pages/CareSupport";
import EducationSkills from "./pages/EducationSkills";
import Advocacy from "./pages/Advocacy";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Programs */}
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/care-support" element={<CareSupport />} />
        <Route path="/programs/education-skills" element={<EducationSkills />} />
        <Route path="/programs/advocacy" element={<Advocacy />} />

        <Route path="/impact" element={<Impact />} />

        {/* Get Involved */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/partner" element={<Partner />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
