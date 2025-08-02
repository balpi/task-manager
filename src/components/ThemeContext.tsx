import { createContext } from "react";
import type { ThemeContext } from "../Types/Theme";

export const themeContext = createContext<ThemeContext | undefined>(undefined);
