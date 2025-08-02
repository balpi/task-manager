import { useEffect, useRef, useState, useCallback } from "react";
import type { Task } from "../Types/Task";

export default function TaskCard({
  task,
  boardName,
  onEditHandle,
}: {
  task: Task;
  boardName: string;
  onEditHandle: (newTask: Task) => void;
}) {
  const colorMap = {
    done: "bg-green-500",
    "in-progress": "bg-yellow-400",
    todo: "bg-red-500",
  };
  const [name, setName] = useState(task.name);
  const [content, setContent] = useState(task.content);
  const [isEditing, setIsEditing] = useState(false);
  const [nameOrContent, setNameOrContent] = useState("");

  const handleEdit = useCallback(() => {
    const updatedTask: Task = {
      ...task,
      name: name.trim() === "" ? task.name : name,
      content: content.trim() === "" ? task.content : content,
    };
    onEditHandle(updatedTask);
    setIsEditing(false);
  }, [task, name, content, onEditHandle]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isEditing) {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          handleEdit();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, name, content, handleEdit]);

  return (
    <>
      <div
        className={`rounded-lg shadow-md p-4 ${
          colorMap[task.status]
        } text-white`}
      >
        <div className="flex justify-start">
          <h2 className="text-lg font-bold bg-gray-500">
            created by {boardName}
          </h2>
        </div>
        <div className="flex flex-col items-center text-center mb-4">
          {isEditing && nameOrContent === "name" ? (
            <input
              type="text"
              className={`text-lg justify-center items-center border-2 bg-amber-700 `}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onBlur={handleEdit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEdit();
                }
              }}
            />
          ) : (
            <h3
              className="text-lg font-bold justify-center items-center"
              onClick={() => {
                setIsEditing(true);
                setNameOrContent("name");
              }}
            >
              {task.name}
            </h3>
          )}

          {isEditing && nameOrContent === "content" ? (
            <textarea
              rows={5}
              className={`text-lg justify-center items-center border-2 bg-amber-700 `}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              onBlur={handleEdit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEdit();
                }
              }}
            />
          ) : (
            <p
              className="text-sm mt-1"
              onClick={() => {
                setIsEditing(true);
                setNameOrContent("content");
              }}
            >
              {task.content}
            </p>
          )}
        </div>
        <span className="text-xs italic">
          {task.createdAt.toLocaleDateString()}
        </span>
      </div>
    </>
  );
}
