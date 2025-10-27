import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [isFormalMode, setIsFormalMode] = useState(false);

  return (
    <ModeContext.Provider value={{ isFormalMode, setIsFormalMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
