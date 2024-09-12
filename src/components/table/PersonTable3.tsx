import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Slider } from "@/components/ui/slider";

import DateCell from "./cell/DateCell";
import BTCCell from "./cell/BTCCell";

import type { Person } from "../../makeData";

import {
  baseTableCss,
  baseTableCssHighlightAlternateColumns,
} from "./tableStyles";

const columnHelper = createColumnHelper<Person>();

interface PersonTable2Props {
  amountColumnMargin: number;
  data: Person[];
  showHighlightAlternateColumns: boolean;
}

export default function PersonTable2({
  amountColumnMargin,
  data,
  showHighlightAlternateColumns,
}: PersonTable2Props) {
  // const [data] = useState(makeData(16));

  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "created_datetime" },
  ]);

  const columns = [
    columnHelper.accessor("created_datetime", {
      header: () => "Date",
      cell: (info) => <DateCell date={info.getValue()} format="M/D/YY h:MMa" />,
    }),
    columnHelper.accessor("firstName", {
      header: () => "First",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Last",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("token_amount", {
      header: () => "Amount",
      cell: (info) => (
        <div style={{ marginRight: amountColumnMargin }}>
          <BTCCell amount={info.getValue()} />
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  const [adjustTable2AmountColumnMargin, setAdjustTable2AmountColumnMargin] =
    useState("none");
  const [table2AmountColumnMarginPx, setTable2AmountColumnMarginPx] =
    useState(8);
  const [table2AmountColumnMarginPct, setTable2AmountColumnMarginPct] =
    useState(20);

  const onValueChange = (value: number[]) => {
    setTable2AmountColumnMarginPx(value[0]);
  };

  return (
    <div className="bg-white">
      <div>
        <table
          className="w-full table-fixed"
          css={
            showHighlightAlternateColumns
              ? baseTableCssHighlightAlternateColumns
              : baseTableCss
          }
        >
          <caption>
            Table 3<br />
            Using TanStack headers, putting data together under a sngle cell.
            Note that a "two-story" heading is required. I did not want that, so
            I explored the other options shown in this example project.
          </caption>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{ width: `${header.getSize()}px` }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: "\u00A0↑",
                        desc: "\u00A0↓",
                      }[header.column.getIsSorted() as string] ?? null}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, i) => (
              <tr key={`person-row-${i}`}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-cyan-50 max-w-xl">
        <div>Adjust Margin of Amount Column</div>
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          <div>
            <input
              checked={showHighlightAlternateColumns}
              className="accent-btc size-4 cursor-pointer"
              type="checkbox"
            />
          </div>
          <div>No adjustment</div>
          <div>
            <input
              checked={showHighlightAlternateColumns}
              className="accent-btc size-4 cursor-pointer"
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
  );
}
