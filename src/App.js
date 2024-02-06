import RegisterPage from '../src/pages/RegisterPage/RegisterPage'
import GenrePage from '../src/pages/GenrePage/GenrePage'
import HomePage from '../src/pages/HomePage/HomePage'
import MoviesPage from '../src/pages/MoviesPage/MoviesPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />}/>
        <Route path="/genre" element={<GenrePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/browse" element={<MoviesPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;