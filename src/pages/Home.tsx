import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
import { useState, useEffect } from "react";

import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
import type { Board } from "../Types/Board";
import type { Task } from "../Types/Task";
import TaskModal from "../components/TaskModal";

export default function Home() {
  const [boards, setBoards] = useState<Board[]>(() => {
    const saved = localStorage.getItem("taskBoards");
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed)
      ? parsed.map((b) => ({
          ...b,
          tasks:
            b.tasks?.map((t: Task) => ({
              ...t,
              createdAt: new Date(t.createdAt),
            })) ?? [],
        }))
      : [];
  });

  const [activeBoard, setActiveBoard] = useState<string>("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const addNewTaskHandler = (task: Task) => {
    const newTask: Task = {
      id: task.id,
      name: task.name,
      boardName: task.boardName,
      content: task.content,
      boardId: task.boardId,
      status: task.status,
      createdAt: task.createdAt,
    };

    const updatedBoards = boards.map((b) => {
      if (b.id === task.boardId) {
        return {
          ...b,
          tasks: [...b.tasks, newTask],
        };
      }
      return b;
    });

    setBoards(updatedBoards);
  };

  const onEditHandle = (task: Task) => {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === task.boardId
          ? {
              ...board,
              tasks: board.tasks.map((t) =>
                t.id === task.id ? { ...t, ...task } : t
              ),
            }
          : board
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("taskBoards", JSON.stringify(boards));
  }, [boards]);

  const activeTasks =
    activeBoard === "All"
      ? boards.flatMap((b) => b.tasks)
      : boards.find((b) => b.id === activeBoard)?.tasks ?? [];
  const boardName = (id: string) => {
    return id === "All" ? "" : boards.find((b) => b.id === id)?.name ?? null;
  };
  console.log("activetasks: " + JSON.stringify(activeTasks));
  const filteredTasks =
    query.trim() === ""
      ? activeTasks
      : activeTasks.filter(
          (task) =>
            task.name?.toLowerCase().includes(query.toLowerCase()) ||
            task.content?.toLowerCase().includes(query.toLowerCase()) ||
            task.boardName?.toLowerCase().includes(query?.toLowerCase())
        );

  const doneTasks = filteredTasks.filter((t) => t.status === "done");
  const onDoingTasks = filteredTasks.filter((t) => t.status === "in-progress");
  const todoTasks = filteredTasks.filter((t) => t.status === "todo");
  return (
    <div className="container dark:bg-black">
      <div>
        <Header />
      </div>

      <div className="row-start-1 h-screen flex pt-4 dark:bg-black">
        <div className=" w-1/4 " onClick={() => setQuery("")}>
          <SideBar
            boards={boards}
            setBoards={setBoards}
            activeBoard={activeBoard}
            setActiveBoard={setActiveBoard}
          />
        </div>
        <div className="w-3/4">
          <div className="flex h-1/6  min-h-[50px] items-center dark:bg-gray-800">
            <FilterBar onHandleQuery={(q) => setQuery(q)} />
            <div className="flex-grow"></div>
            <button
              className="text-white text-2xl bg-blue-600 rounded-2xl justify-end items-end hover:bg-green-700"
              onClick={() => {
                if (activeBoard === "All") {
                  alert("You have to choose one of board before continue");
                  return null;
                }
                setIsModalOpen(true);
              }}
            >
              Add New Task
            </button>
            <TaskModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              addNewTask={addNewTaskHandler}
              boardId={activeBoard}
              boardName={boardName(activeBoard) ?? ""}
            />
          </div>
          <div className=" flex h-5/6  gap-1 dark:bg-gray-800">
            <div className="w-1/3 bg-green-300">
              <div className="h-1/6">
                <h2>done</h2>
              </div>
              <div className="h-5/6 flex flex-col space-y-4">
                {doneTasks.map((task: Task) =>
                  task && task.status === "done" ? (
                    <div
                      key={task.id + "div"}
                      className=" border border-gray-300 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800"
                    >
                      <TaskCard
                        key={task.id}
                        boardName={boardName(task.boardId) ?? ""}
                        task={task}
                        onEditHandle={onEditHandle}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div className="w-1/3 bg-amber-300">
              <div className="h-1/6">
                <h2>on doing</h2>
              </div>
              <div className="h-5/6">
                {onDoingTasks.map((task: Task) =>
                  task && task.status === "in-progress" ? (
                    <TaskCard
                      key={task.id}
                      boardName={boardName(task.boardId) ?? ""}
                      task={task}
                      onEditHandle={onEditHandle}
                    />
                  ) : null
                )}
              </div>
            </div>
            <div className="w-1/3 bg-red-900">
              <div className="h-1/6">
                <h2>to do</h2>
              </div>
              <div className="h-5/6">
                {todoTasks.map((task: Task) =>
                  task && task.status === "todo" ? (
                    <TaskCard
                      key={task.id}
                      boardName={boardName(task.boardId) ?? ""}
                      task={task}
                      onEditHandle={onEditHandle}
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
