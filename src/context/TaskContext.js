import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  return context;
};

export const TaskContextProvider = ({ children }) => {
  return (
    <TaskContext.Provider value={{ name: "hello world" }}>
      {children}
    </TaskContext.Provider>
  );
};
