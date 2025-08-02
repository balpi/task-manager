import Header from "../components/Header";

export default function About() {
  return (
    <div className=" container h-max dark:bg-gray-800">
      <div>
        <Header />
      </div>

      <div className="flex justify-center items-center h-40 m-5 dark:bg-gray-900">
        <h2 className="text-amber-600 text-3xl font-bold">About Me</h2>
      </div>
      <hr />

      <div className="max-w-3xl mx-auto p-6 text-gray-800 dark:text-gray-200">
        <p className="mb-4">
          Hi, I'm Serhat — a software developer with a background in education
          and a passion for clean, functional code.
        </p>
        <p className="mb-4">
          After 16 years as a dedicated teacher, I decided to follow my
          long-standing passion for technology and completed my degree in
          Computer Engineering. Now, I'm focused on building real-world
          applications using modern technologies like React, TypeScript, .NET,
          and C#.
        </p>
        <p className="mb-4">
          My projects combine practical problem-solving with clean architecture
          and modern UI/UX principles. I enjoy working on both frontend and
          backend challenges, and I'm especially drawn to creating meaningful
          tools that improve everyday workflows — like task managers, automation
          tools, and dashboard interfaces.
        </p>
        <p className="mb-4">
          I'm currently sharpening my skills and expanding my portfolio with the
          goal of joining a tech company in Europe (especially Germany) where I
          can contribute to impactful projects and grow as a full-time
          developer.
        </p>
        <p>
          When I’m not coding, I’m usually exploring new technologies, helping
          others learn, or spending time with my family.
        </p>
      </div>

      <h2 className=""></h2>
    </div>
  );
}
