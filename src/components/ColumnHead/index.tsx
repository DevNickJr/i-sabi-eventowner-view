import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ColumnHead<T, K>({
    title,
    column,
    className,
    sortable = true
}: {
    title: string;
    column: Column<T, K>;
    className?: string;
    sortable?: boolean
}) {
    return (
        <span 
         onClick={() => column.getCanSort() && column.toggleSorting()}
        className={cn(
           "gap-1 capitalize whitespace-nowrap relative cursor-pointer flex items-center group",
            className
          )}>
            <span className="relative w-fit">
                {title}
                {
                    sortable &&
                    <button
                        type="button"
                        onClick={() => column.toggleSorting()}
                        className={`hover:bg-gray-200 absolute transition-all rounded p-0.5 px-1 -right-8 top-1/2 -translate-y-1/2 group-hover:z-10  ${column.getCanSort() ? !!column.getIsSorted() ? "z-10" : '-z-10' : 'hidden'}`}
                    >
                        {column.getIsSorted() === "asc" ? (
                            <ArrowUp size={15} />
                        ) : column.getIsSorted() === "desc" ? (
                            <ArrowDown size={15} />
                        ) : (
                            <ArrowUp size={15} className="" />
                        )}
                    </button>
                }
            </span>
        </span>
    );
}