import { useState } from "react";
import type { Task } from "../Types/Task";

export default function TaskModal({
  open,
  onClose,
  addNewTask,
  boardId,
  boardName,
}: {
  open: boolean;
  onClose: () => void;
  addNewTask: (task: Task) => void;
  boardId: string;
  boardName: string;
}) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"todo" | "in-progress" | "done">("todo");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      boardName,
      content,
      boardId,
      status,
      createdAt: new Date(),
    };
    addNewTask(newTask);
    onClose();

    setName("");
    setContent("");
    setStatus("todo");
  };

  return (
    <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative m-4 p-4 w-2/5 rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Task Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Task Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <select
              className="w-full border p-2 rounded"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "todo" | "in-progress" | "done")
              }
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
