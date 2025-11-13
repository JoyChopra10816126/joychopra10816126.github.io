import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const Mode = {
  BASIC: {
    id: 'BASIC',
    label: "Basic",
    imgSource: "/basic-mode.png"
  },
  EXAMPLES: {
    id: 'EXAMPLE',
    label: "Examples",
    imgSource: "/examples-mode.png"
  },
  ADVANCED: {
    id: 'ADVANCED',
    label: "Advanced",
    imgSource: "/advanced-mode.png"
  },
};

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(Mode.BASIC);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
