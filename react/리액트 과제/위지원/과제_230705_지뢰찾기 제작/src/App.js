import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import { Gameover, Gameend } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/gameover" element={<Gameover />}></Route>
        <Route path="/gameend" element={<Gameend />}></Route>
      </Routes>
    </div>
  );
}

export default App;
