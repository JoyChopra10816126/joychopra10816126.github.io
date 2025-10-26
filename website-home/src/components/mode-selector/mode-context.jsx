import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [learningMode, setLearningMode] = useState(false);

  return (
    <ModeContext.Provider value={{ learningMode, setLearningMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
