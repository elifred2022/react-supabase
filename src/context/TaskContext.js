import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext();

export const useTask = () => {
  return useContext(TaskContext);
};

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  const getTask = async () => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;
      console.log("Usuario actual:", user);

      const { data, error } = await supabase
        .from("task") // nombre de la tabla
        .select("*") // selecciona todas las columnas
        .eq("done", true); // solo tareas con done=true

      if (error) throw error;

      setTask(data);
      console.log("Tareas obtenidas:", data);
    } catch (error) {
      console.error("Error al obtener tareas:", error.message);
    }
  };

  useEffect(() => {
    getTask(); // llamada al montar el componente
  }, []);

  return (
    <TaskContext.Provider value={{ task, getTask }}>
      {children}
    </TaskContext.Provider>
  );
};
