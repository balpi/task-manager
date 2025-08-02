import { useEffect, useState } from "react";

export default function Modal({
  open,
  onClose,
  addNewBoard,
  editName,
}: {
  open: boolean;
  onClose: () => void;
  addNewBoard: (name: string) => void;
  editName: string;
}) {
  const [name, setName] = useState("");
  useEffect(() => {
    if (open) setName(editName);
  }, [open, editName]);
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center
     bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
    >
      <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm">
        <div className="text-xl font-medium text-slate-800 pb-4">
          Add new TaskBoard
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNewBoard(name);
            onClose();
          }}
        >
          <div className="border-t border-slate-200 py-4 text-slate-600 font-light">
            <input
              type="text"
              value={name}
              className="w-max"
              placeholder="Taskboard Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="py-2 px-4 text-sm text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="ml-2 py-2 px-4 text-sm text-white bg-green-600 hover:bg-green-700"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
