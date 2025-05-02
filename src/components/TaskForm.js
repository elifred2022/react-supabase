import React, { useState } from "react";
import { useTask } from "../context/TaskContext"; // Ajusta el path si es necesario

function TaskForm() {
  const [taskName, setTaskname] = useState("");
  const { addTask, message } = useTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addTask(taskName);
    if (success) setTaskname("");
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
