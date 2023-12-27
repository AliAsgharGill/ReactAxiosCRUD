import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/Read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
