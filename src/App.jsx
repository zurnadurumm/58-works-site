import { Routes } from "react-router-dom"
import Home from "./pages/home.jsx"

import Terms from "./pages/Terms"
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom"
import Events from "./pages/Events"
import NavBar from "./components/NavBar"
import Privacy from "./pages/Privacy"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route index element={<Home />} />
          <Route path="terms" element={<Terms />} />
          <Route path="events" element={<Events />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>

    </div>

  )
}

export default App