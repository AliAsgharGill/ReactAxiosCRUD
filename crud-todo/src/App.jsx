import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/Read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
