import React, { useState } from "react";
import { supabase } from "../supabase/client";

function TaskForm() {
  const [taskName, setTaskname] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setMessage("Usuario no autenticado");
        console.error(userError);
        return;
      }

      const { data, error } = await supabase
        .from("task")
        .insert({ name: taskName, userId: user.id });

      if (error) {
        setMessage("Error al guardar tarea");
        console.error(error);
      } else {
        setMessage("Tarea añadida ✅");
        setTaskname("");
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          placeholder="escriba su tarea"
          value={taskName}
          onChange={(e) => setTaskname(e.target.value)}
          required
        />
        <button type="submit">Añadir</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default TaskForm;
