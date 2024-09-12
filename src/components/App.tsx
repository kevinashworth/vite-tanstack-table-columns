import { useState } from "react";
import { Slider } from "@/components/ui/slider";

import { makeData } from "..//makeData";

import type { Person } from "..//makeData";
import PersonTable1 from "./table/PersonTable1";
import PersonTable2 from "./table/PersonTable2";

type adjust = "none" | "px" | "%";

function App() {
  const [showHighlightAlternateColumns, setShowHighlightAlternateColumns] =
    useState(false);
  const toggleShowHighlightAlternateColumns = () => {
    setShowHighlightAlternateColumns(!showHighlightAlternateColumns);
  };

  const [adjustTable2AmountColumnMargin, setAdjustTable2AmountColumnMargin] =
    useState("none");
  const [table2AmountColumnMarginPx, setTable2AmountColumnMarginPx] =
    useState(8);
  const [table2AmountColumnMarginPct, setTable2AmountColumnMarginPct] =
    useState(20);

  const onValueChange = (value: number[]) => {
    setTable2AmountColumnMarginPx(value[0]);
  };

  const [data, setData] = useState(makeData(11) as Person[]);
  const refreshData = () => setData(makeData(11));

  console.log("data", data);

  return (
    <>
      <div className="flex flex-row p-4 bg-blue-900">
        <div className="my-4 bg-white p-4">
          Controls
          <label className="flex w-full flex-row items-center gap-2 text-xs text-gray-600">
            <input
              checked={showHighlightAlternateColumns}
              className="accent-btc size-4 cursor-pointer"
              onChange={toggleShowHighlightAlternateColumns}
              type="checkbox"
            />
            Highlight Alternate Columns
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
            <div className="">
              <PersonTable2
                data={data}
                amountColumnMargin={table2AmountColumnMarginPx}
                showHighlightAlternateColumns={showHighlightAlternateColumns}
                toggleShowHighlightAlternateColumns={
                  toggleShowHighlightAlternateColumns
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-4 gap-8">
        <div>Controls</div>
        <div>
          <label className="flex w-full flex-row items-center gap-2 text-xs text-gray-600">
            <input
              checked={showHighlightAlternateColumns}
              className="accent-btc size-4 cursor-pointer"
              onChange={toggleShowHighlightAlternateColumns}
              type="checkbox"
            />
            Highlight Alternate Columns
          </label>
          <button className="border p-1 rounded" onClick={refreshData}>
            Refresh Data
          </button>
        </div>

        <div className="bg-cyan-50">
          <div>Adjust Margin of Amount Column</div>
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <div>
              <input
                checked={showHighlightAlternateColumns}
                className="accent-btc size-4 cursor-pointer"
                onChange={toggleShowHighlightAlternateColumns}
                type="checkbox"
              />
            </div>
            <div>No adjustment</div>
            <div>
              <input
                checked={showHighlightAlternateColumns}
                className="accent-btc size-4 cursor-pointer"
                onChange={toggleShowHighlightAlternateColumns}
                type="checkbox"
              />
            </div>
            <div>
              Margin in px
              <Slider
                defaultValue={[33]}
                max={100}
                step={1}
                value={[table2AmountColumnMarginPx]}
              />
              {table2AmountColumnMarginPx}px
            </div>
            <div>
              <input
                checked={showHighlightAlternateColumns}
                className="accent-btc size-4 cursor-pointer"
                onChange={toggleShowHighlightAlternateColumns}
                type="checkbox"
              />
            </div>
            <div>
              Margin in %
              <Slider
                defaultValue={[33]}
                max={100}
                step={1}
                value={[table2AmountColumnMarginPct]}
              />
              {table2AmountColumnMarginPct}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
