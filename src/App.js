import RegisterPage from '../src/pages/RegisterPage/RegisterPage'
import GenrePage from '../src/pages/GenrePage/GenrePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/genre" element={<GenrePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;