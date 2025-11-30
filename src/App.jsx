import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";

import SmartCoopFarm from "./pages/projects/SmartCoopFarm";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />

        <Route path="/smart-coop-farm" element={<SmartCoopFarm />} />
      </Routes>
    </>
  );
}

