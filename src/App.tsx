import { HomePage, Lesson1, Lesson2, Lesson3, Lesson4 } from "./pages";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import "katex/dist/katex.min.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="lesson">
          <Route index element={<Navigate to="1" />} />
          <Route path="1" element={<Lesson1 />} />
          <Route path="2" element={<Lesson2 />} />
          <Route path="3" element={<Lesson3 />} />
          <Route path="4" element={<Lesson4 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
