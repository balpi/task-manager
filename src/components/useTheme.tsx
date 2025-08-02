import { useContext } from "react";
import { themeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(themeContext);

  console.log("context: " + JSON.stringify(context));

  if (!context) {
    throw new Error("useTheme have to be used within ThemeProvider");
  }
  return context;
};
