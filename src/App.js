import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
