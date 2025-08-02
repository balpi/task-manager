import { useEffect, useState } from "react";
import Modal from "./BoardModal";
import type { Board } from "../Types/Board";

type Props = {
  boards: Board[];
  setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
  activeBoard: string;
  setActiveBoard: (id: string) => void;
};

export default function Sidebar({
  boards,
  setBoards,
  activeBoard,
  setActiveBoard,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBoardId, setEditingBoardId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const addNewBoardHandler = (name: string) => {
    if (editingBoardId) {
      setBoards((prev) =>
        prev.map((board) =>
          board.id === editingBoardId ? { ...board, name } : board
        )
      );
    } else {
      const newBoard: Board = {
        id: Date.now().toString(),
        name: name,
        tasks: [],
      };
      setBoards((prev) => [...prev, newBoard]);
    }
    setEditName("");
    setEditingBoardId(null);
  };

  const handleRemoveBoard = (id: string) => {
    const confirmed = confirm("Bu TaskBoard'u silmek istediğine emin misin?");
    if (!confirmed) return;

    setBoards((prevBoards) => prevBoards.filter((board) => board.id !== id));

    if (activeBoard === id) {
      setActiveBoard("All");
    }
  };

  useEffect(() => {
    localStorage.setItem("taskBoards", JSON.stringify(boards));
    setEditingBoardId(null);
  }, [boards]);

  const handleEditBoard = (id: string) => {
    const board = boards.find((b) => b.id === id);

    if (!board) return;
    setEditingBoardId(board.id);
    setEditName(board.name);
    setIsModalOpen(true);
  };
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        <li
          tasks-id="All"
          className={activeBoard === "All" ? "mb-2 bg-amber-300" : "mb-2"}
          onClick={() => setActiveBoard("All")}
        >
          All Tasks
        </li>

        {boards.map((board) => (
          <li
            key={board.id}
            className={
              board.id === activeBoard
                ? "group flex justify-between items-center  mb-2 bg-amber-300"
                : "group flex justify-between items-center  mb-2"
            }
            onClick={() => setActiveBoard(board.id)}
          >
            {board.name}
            <div className=" w-1/3 hidden group-hover:flex gap-1">
              <button
                className=" text-xs bg-blue-900 text-white rounded-2xl hover:bg-green-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditBoard(board.id);
                }}
              >
                Edit
              </button>

              <button
                className=" text-xs bg-blue-300 text-white rounded-2xl hover:bg-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveBoard(board.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        <li className="mb-2" onClick={() => setIsModalOpen(true)}>
          Add new TaskBoard
          <Modal
            open={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);

              setEditName("");
            }}
            addNewBoard={addNewBoardHandler}
            editName={editName}
          />
        </li>
      </ul>
    </div>
  );
}
