import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import RegPage from "./Pages/RegPage/RegPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/reg" element={<RegPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
