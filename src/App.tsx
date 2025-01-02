import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router"
import Contact from "./screens/contact"
import Home from "./screens/home"
import Curriculum from "./screens/curriculum"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
