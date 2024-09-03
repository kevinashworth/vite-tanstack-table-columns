import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import clsx from "clsx";

import BTC from "../icons/btc";

import DateCell from "./DateCell";
// import TokensCell from './TokensCell'

import { makeData } from "../makeData";
import type { Person } from "../makeData";

// import './tableStyles.css'
import { baseTableCss, tableCssHighlightAlternateColumns } from "./tableStyles";
// import { baseTableCss } from "./tableStyles";

const columnHelper = createColumnHelper<Person>();

const columns = [
  // columnHelper.accessor('created_datetime', {
  //   header: () => 'Date',
  //   cell: (info) => <DateCell date={info.getValue()} format="M/D/YY h:MMa" />
  // }),
  columnHelper.accessor("created_datetime", {
    header: () => "Date",
    cell: (info) => (
      <div className="text-right">
        <DateCell date={info.getValue()} format="M/D/YY" />
      </div>
    ),
  }),
  columnHelper.accessor("created_datetime", {
    id: "time",
    cell: (info) => (
      <div className="text-left">
        <DateCell date={info.getValue()} format="h:MMa" />
      </div>
    ),
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
    cell: (info) => {
      const value = info.getValue();
      const showColorGreen = value > 0;
      const showColorRed = value < 0;
      return (
        <div
          className={clsx("text-right", {
            "text-green": showColorGreen,
            "text-error": showColorRed,
          })}
        >
          {value}
        </div>
      );
    },
  }),
  columnHelper.display({
    id: "token",
    cell: () => <BTC className="size-5 fill-orange-700 stroke-orange-700" />,
  }),
];

interface PersonTableProps {
  showHighlightAlternateColumns: boolean;
  toggleShowHighlightAlternateColumns: () => void;
}

export default function PersonTable({
  showHighlightAlternateColumns,
  toggleShowHighlightAlternateColumns,
}: PersonTableProps) {
  const [data] = useState(makeData(16));
  // const refreshData = () => setData(makeData(1000))

  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "created_datetime" },
  ]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="flex flex-row">
      <div>
        <table
          className="w-full table-fixed"
          css={
            showHighlightAlternateColumns
              ? tableCssHighlightAlternateColumns
              : baseTableCss
          }
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const colSpan2Headers = ["token_amount", "created_datetime"];
                  const unRenderedHeaders = ["time", "token"];
                  const isColSpan2Header = colSpan2Headers.includes(header.id);
                  const isUnRenderedHeader = unRenderedHeaders.includes(
                    header.id
                  );
                  if (isUnRenderedHeader) return null;
                  return (
                    <th
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                      colSpan={isColSpan2Header ? 2 : undefined}
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
    </div>
  );
}
