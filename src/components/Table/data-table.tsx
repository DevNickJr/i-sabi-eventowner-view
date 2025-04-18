import {
	ColumnDef,
	ColumnFiltersState,// filter
	flexRender,
	getCoreRowModel,
	getFilteredRowModel, // filter
	getSortedRowModel, // sort
	useReactTable,
  } from "@tanstack/react-table"
  
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React from "react";
import { Pagination } from "./pagination";

interface DataTableProps<TData> {
	data: TData[]
	columns:  ColumnDef<TData>[];
	title?: string
	showPagination?: boolean;
	onPaginationChange?: React.Dispatch<React.SetStateAction<{
	  pageSize: number;
	  pageIndex: number;
	}>>
	onSortingChange?: React.Dispatch<React.SetStateAction<{
	  id: string;
	  desc: boolean;
	}[]>>
	pageCount?: number;
	pagination?: {
	  pageSize: number;
	  pageIndex: number;
	}
	sorting?: {
	  id: string;
	  desc: boolean;
	}[]
  }
  

export default function DataTable<TData,>({
	data,
	columns,
	pageCount=-1,
}: DataTableProps<TData>) {
	const [, setColumnFilters] = React.useState<ColumnFiltersState>([]) // filter
	const [, setGlobalFilter] = React.useState('')
	
   const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(), // sort
		onColumnFiltersChange: setColumnFilters, // filter
		onGlobalFilterChange: setGlobalFilter, // GLOBAL FILTER
		getFilteredRowModel: getFilteredRowModel(), // filter
		// manualPagination: true, // server pagination
		// onPaginationChange, // server pagination
		pageCount,
		// manualSorting: true,
		// onSortingChange,
		// 	state: {
		// 	sorting, // sort
		// 	columnFilters, // filter
		// 	globalFilter, // filter
		// 	pagination, // sever side
		// },
   })
  
	// const handlePageSize = (value: string) => {
	// 	table.setPageSize(Number(value))
	// }

	return (
		<>
			<Table className="overflow-auto text-[#42526E] text-sm">
				<TableHeader className="bg-white">
					{table.getHeaderGroups().map((headerGroup, index) => (
						<TableRow key={headerGroup.id + `${index}`} className="px-12">
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id} colSpan={header.colSpan} className="">
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row, index) => (
							<TableRow
								key={row.id + `${index}`}
								data-state={row.getIsSelected() && "selected"}
								className={`${index % 2 != 0 && 'bg-white'}`}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<Pagination tableLib={table} />
		</>
	);
}