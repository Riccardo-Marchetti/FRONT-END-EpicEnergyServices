import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import StartPage from "./components/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fatture from "./components/Fatture";
import Clienti from "./components/Clienti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("token") ? <StartPage /> : <StartPage />
          }
        />
        <Route path="/accedi" element={<LoginPage />} />
        <Route path="/registrati" element={<RegisterPage />} />
        <Route path="/fatture" element={<Fatture />} />
        <Route path="/clienti" element={<Clienti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
