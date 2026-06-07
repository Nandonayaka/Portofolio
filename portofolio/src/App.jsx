import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-3xl font-bold underline text-center">
            hello world
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
