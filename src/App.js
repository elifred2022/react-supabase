import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./supabase/client";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFund";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (session) {
        navigate("/"); // Navega a Home si hay una sesión válida
      } else {
        navigate("/login"); // Navega a Login si no hay sesión
      }
    });

    // Limpieza para evitar fugas de memoria
    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]); // Asegúrate de que 'navigate' esté en la lista de dependencias

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
