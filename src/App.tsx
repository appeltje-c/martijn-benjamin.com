import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Resume from "./screens/resume";
import About from "./screens/about";
import Projects from "./screens/projects";
import Contact from "./screens/contact";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
