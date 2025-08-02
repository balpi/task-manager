import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default {
  content: [
    join(__dirname, "./index.html"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};