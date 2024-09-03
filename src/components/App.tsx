import { useState } from "react";

// import EmotionTest from "./EmotionTest";

// function App() {
//   return (
//     <>
//       <EmotionTest />
//     </>
//   );
// }

// export default App;

import PersonTable from "./PersonTable";

function App() {
  const [showHighlightAlternateColumns, setShowHighlightAlternateColumns] =
    useState(true);
  const toggleShowHighlightAlternateColumns = () => {
    setShowHighlightAlternateColumns(!showHighlightAlternateColumns);
  };

  return (
    <div className="flex flex-row p-4 bg-blue-900">
      <div className="bg-white p-4">
        <label className="flex w-full flex-row items-center gap-2 text-xs text-gray-600">
          <input
            checked={showHighlightAlternateColumns}
            className="accent-sky size-4 cursor-pointer"
            name="enable-3-and-4"
            onChange={toggleShowHighlightAlternateColumns}
            type="checkbox"
          />
          Highlight Alternate Columns
        </label>
      </div>
      <div className="bg-blue-900 flex items-center justify-center">
        <div className="m-4 max-w-3xl bg-white p-4">
          <PersonTable
            showHighlightAlternateColumns={showHighlightAlternateColumns}
            toggleShowHighlightAlternateColumns={
              toggleShowHighlightAlternateColumns
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
