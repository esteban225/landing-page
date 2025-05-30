import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Hero from "./pages/Hero/Hero";
import Service from "./pages/Service/Service";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />

          <Route
            path="/service"
            element={
              <>
                <Navbar />
                <br />
                <br />
                <Service />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <br />
                <br />
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <br />
                <br />

                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}
