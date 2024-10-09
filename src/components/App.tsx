import { useState } from "react";

import { makeData } from "../makeData";

import type { Person } from "../makeData";
import PersonTable1 from "./table/PersonTable1";

function App() {
  const [showHighlightAlternateColumns, setShowHighlightAlternateColumns] =
    useState(false);
  const toggleShowHighlightAlternateColumns = () => {
    setShowHighlightAlternateColumns(!showHighlightAlternateColumns);
  };

  const [data, setData] = useState(makeData(11) as Person[]);
  const refreshData = () => setData(makeData(11));

  return (
    <div className="flex flex-row p-4 bg-blue-900 max-w-5xl">
      <div className="my-4 bg-white p-4 flex flex-col gap-4 items-center">
        <div className="font-medium">Controls</div>
        <label className="flex w-full flex-row items-center gap-2 text-xs text-gray-600">
          <input
            checked={showHighlightAlternateColumns}
            className="accent-btc size-4 cursor-pointer"
            onChange={toggleShowHighlightAlternateColumns}
            type="checkbox"
          />
          Highlight Alternating Columns
        </label>
        <button
          className="border p-1 rounded-md px-2 bg-blue-700 text-white text-xs"
          onClick={refreshData}
        >
          Refresh&nbsp;Data
        </button>
      </div>
      <div className="flex items-center justify-center p-4 bg-cyan">
        <div className="flex flex-row gap-4">
          <div className="">
            <PersonTable1
              data={data}
              showHighlightAlternateColumns={showHighlightAlternateColumns}
            />
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default App;
