import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTask } from "../context/TaskContext";

function Home() {
  const navigate = useNavigate();
  const obj = useTask();
  console.log(obj);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        navigate("/login"); // Redirige a login si no hay usuario
      }
    };

    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login"); // Redirige a login después de cerrar sesión
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm />
    </div>
  );
}

export default Home;
