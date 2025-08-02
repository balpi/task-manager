import { useState } from "react";

export default function FilterBar({
  onHandleQuery,
}: {
  onHandleQuery: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleQuery = () => {
    onHandleQuery(query);
    setQuery("");
  };
  return (
    <div>
      <div className="w-full max-w-sm min-w-[200px] mt-6 ">
        <div className="relative">
          <input
            type="text"
            className="w-full placeholder: text-slate-700 border border-b-gray-900 rounded-2xl  focus:text-2xl hover:bg-amber-300 "
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleQuery();
              }
            }}
          />
          <button
            className=" border-1 rounded-2xl bg-slate-200 py-0 focus:text-2xl hover:bg-amber-950 absolute right-1 top-1/2 -translate-y-1/2 px-3"
            onClick={handleQuery}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
