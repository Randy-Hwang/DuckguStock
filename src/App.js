import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/:URLticker" element={<Content />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
