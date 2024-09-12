import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import BTC from "@/icons/btc";
import type { Person } from "@/makeData";
import AmountCell from "./cell/AmountCell";
import DateCell from "./cell/DateCell";
import {
  baseTableCss,
  baseTableCssHighlightAlternateColumns,
} from "./tableStyles";

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("created_datetime", {
    header: () => "Date",
    cell: (info) => (
      <div className="text-right">
        <DateCell date={info.getValue()} format="M/D/YY" />
      </div>
    ),
    sortingFn: "text",
  }),
  columnHelper.accessor("created_datetime", {
    id: "created_datetime2",
    cell: (info) => (
      <div className="text-left">
        <DateCell date={info.getValue()} format="h:MMa" />
      </div>
    ),
    enableSorting: false,
  }),

  columnHelper.accessor("firstName", {
    header: () => "First",
    cell: (info) => info.getValue(),
    sortingFn: "text",
  }),

  columnHelper.accessor("lastName", {
    header: () => "Last",
    cell: (info) => info.getValue(),
    sortingFn: "text",
  }),

  columnHelper.accessor("token_amount", {
    header: () => "Amount",
    cell: (info) => <AmountCell amount={info.getValue()} />,
    sortingFn: "basic",
  }),
  columnHelper.display({
    id: "token_amount2",
    cell: () => <BTC className="size-5 fill-orange-700 stroke-orange-700" />,
    enableSorting: false,
  }),
];

interface PersonTableProps {
  data: Person[];
  showHighlightAlternateColumns: boolean;
}

export default function PersonTable({
  data,
  showHighlightAlternateColumns,
}: PersonTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "created_datetime" },
  ]);

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

  return (
    <div className="bg-white p-4">
      <p className="text-base font-serif mb-2">
        <b>Table 1</b> is my intervention into the guts of a TanStack Table to
        create <code className="text-sm">colSpan</code>s in the table headers.
        Note that the date and bitcoin columns are 2 columns wide, with a single
        header, to get the middle of the contents to align vertcially. I
        couldn't find any examples like this, but it yields a nice result, and
        that's why I'm writing this blog post, in case it helps you, dear
        reader.
      </p>
      <p className="text-base font-serif mb-2">
        Toggle the <code className="text-sm">Highlight Alternate Columns</code>{" "}
        checkbox to see what's what with the columns.
      </p>
      <p className="text-base font-serif mb-2">
        All 4 columns are sortable by clicking the header. The Date column sorts
        by the date, and both of its columns have the same source because they
        are the same data, formatted differently. Because{" "}
        <code className="text-sm">created_datetime</code> is an ISO string, we
        sort by <code className="text-sm">text</code>, not by{" "}
        <code className="text-sm">datetime</code>. The Amount column sorts{" "}
        <code className="text-sm">token_amount</code> before any formatting is
        done to it, so it's sorted as a <code className="text-sm">basic</code>.
        It doesn't come with an icon or any currency information. The BTC icon
        is added to every row.
      </p>
      <div>
        <table
          css={
            showHighlightAlternateColumns
              ? baseTableCssHighlightAlternateColumns
              : baseTableCss
          }
        >
          <caption>Table 1</caption>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const colSpan2Headers = ["created_datetime", "token_amount"];
                  const hiddenHeaders = ["created_datetime2", "token_amount2"];
                  const isColSpan2Header = colSpan2Headers.includes(header.id);
                  const isHiddenHeader = hiddenHeaders.includes(header.id);

                  if (isHiddenHeader) return null;

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
