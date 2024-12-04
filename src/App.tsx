import "./App.css";
import { Principal } from "./Components/Home/Principal/Principal";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MyBooks } from "./Components/myBooks/MyBooks";
import { AboutMe } from "./Components/AboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/About-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
