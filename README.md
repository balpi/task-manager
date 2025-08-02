📝 Task Manager App
A responsive task management application built with React, Vite, Tailwind CSS, and TypeScript. Includes dark/light theme toggle, filtering, editing, and route navigation with React Router.

🚀 Features
⚛️ React + Vite: Lightning-fast frontend framework with instant hot-reload.

🎨 Tailwind CSS v4: Custom design using utility-first styling.

🌓 Theme Support: Light/Dark mode toggle via ThemeContext.

🗃️ Task Cards: Interactive cards with editable modal dialogs.

🔍 Filter Logic: Filter tasks by status (pending, in progress, done).

🧭 Routing:

/about – Learn more about the project.

- – Catch-all for undefined routes with a NotFound page.

🧩 Responsive Design: Works beautifully across screen sizes.

📸 Screenshots
Light Theme("./public/ssLightTheme.png")
Dark Theme("./public/ssDarkTheme.png")

🧱 Tech Stack
Framework: React + TypeScript

Build Tool: Vite

Styling: Tailwind CSS v4

Routing: React Router v6

State Management: useState + Context API

📁 Folder Structure
pgsql
Copy
Edit
task-manager/
├── src/
│ ├── components/ # Reusable UI components (TaskCard, Header, etc.)
│ ├── context/ # ThemeContext for dark/light mode
│ ├── pages/ # Page-level components (Home, About, NotFound)
│ ├── App.tsx # Main app wrapper
│ ├── main.tsx # App entry point
│ └── index.css # Tailwind imports and custom variant
├── public/
|\_\_ routes
├── tailwind.config.ts # Tailwind configuration
├── postcss.config.js # PostCSS config
├── index.html
├── README.md
🎛 Theme Toggle Fix (Tailwind v4)
Tailwind CSS v4 dropped automatic dark: variant support. To fix dark mode:

Update your index.css:

css

@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark \*));

Without this, your dark: classes won’t work — even if the DOM updates!

🧪 Run Locally
bash
Copy
Edit

# 1. Clone repo

git clone https://github.com/your-username/task-manager.git
cd task-manager

# 2. Install dependencies

npm install

# 3. Start dev server

npm run dev
📌 Planned Improvements
✅ Task filtering by status

✅ Modal editing

Drag and drop reordering

Backend integration (Firebase or Supabase)

User login with JWT

🙋‍♂️ About the Developer
Hi, I'm Serhat — a former teacher turned developer, now building real-world React + .NET projects. I’m currently focused on relocating to Germany for a software engineering career.
Check out more of my work on GitHub.

⭐️ Show Support
If you found this project useful:

Star this repo ⭐

Share it on LinkedIn or Twitter 🚀

Mention @balpi and let’s connect!

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
