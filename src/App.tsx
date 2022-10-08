import { HomePage } from "./pages";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
