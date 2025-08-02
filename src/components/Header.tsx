import { useEffect } from "react";
import { useTheme } from "./useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log("new theme: " + theme);
  }, [theme]);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 shadow flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide">Task Manager</h1>

      <h2 className="font-bold justify-self-start">
        <a href="/">Home</a>
      </h2>
      <h2>
        <a href="/about">About</a>
      </h2>

      <div className="flex items-center gap-4">
        {/* Temayı değiştir */}
        <button
          className="dark:bg-amber-500 bg-gray-900 px-3 py-1 rounded hover:bg-gray-500"
          onClick={toggleTheme}
        >
          Switch To {theme === "dark" ? "light" : "dark"}
        </button>

        {/* Profil simgesi (şimdilik sadece ikon) */}
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
          <span className="text-sm font-bold">S</span>
        </div>
      </div>
    </nav>
  );
}
