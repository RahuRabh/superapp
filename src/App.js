import RegisterPage from '../src/pages/RegisterPage/RegisterPage'
import GenrePage from '../src/pages/GenrePage/GenrePage'
import HomePage from '../src/pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/genre" element={<GenrePage />}/>
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;