import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export default function TaskList({ reloadFlag }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("task") // ⚡ nombre de la tabla
      .select("*")
      .order("id", { ascending: false }); // opcional, para ver las últimas primero
    console.log(data);

    if (error) {
      console.error("Error cargando tareas:", error.message);
    } else {
      setTasks(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, [reloadFlag]); // Cada vez que cambie reloadFlag => recarga tareas

  if (loading) return <p>Cargando...</p>;

  if (tasks.length === 0) return <p>No hay tareas aún.</p>;

  return (
    <ul className="list-disc pl-5">
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}
