import { Routes } from "react-router-dom"
import Home from "./pages/home.jsx"
import { I18nextProvider } from "react-i18next"
import i18n from '../i18n.js'
import Terms from "./pages/Terms"
import { HashRouter, Route, Link, Outlet } from "react-router-dom"
import Events from "./pages/Events"
import NavBar from "./components/NavBar"
import Privacy from "./pages/Privacy"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="scroll-smooth">
        <HashRouter>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route index element={<Home />} />
            <Route path="terms" element={<Terms />} />
            <Route path="events" element={<Events />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

        </HashRouter>

      </div>
    </I18nextProvider>

  )
}

export default App