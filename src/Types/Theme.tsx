export type Theme = "light" | "dark";

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
