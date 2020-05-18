import React, { createContext } from "react";
import UseToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDark, toggle] = UseToggleState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ isDark, toggle }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};
