import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router"
import Contact from "./screens/contact"
import Experience from "./screens/experience"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
