"use client"
import type {
    Table as ITable
} from "@tanstack/react-table"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

export function Pagination<TData>({ tableLib }: { tableLib: ITable<TData> }) {
    // const pathname = usePathname()
    // const searchParams = useSearchParams()
    // const page = Number(searchParams.get('page')) || 1;
    // // const limit = Number(searchParams.get('limit')) || 10;
    // const { createQueryString } = useCreateQueryString()
    // const router = useRouter()

    // const createURL = useCallback((name: string, value: number | string) => {
    //     const urlParams = createQueryString({ name, value })
    //     return `${pathname}?${urlParams}`;
    // }, [createQueryString, pathname]);
    
    // console.log('reload', tableLib.getState().pagination.pageIndex)

    return (        
        <div className="flex flex-col items-center justify-between gap-3 mt-4 text-sm font-medium md:gap-4 md:flex-row text-black/60">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                    <select
                    className="text-sm bg-gray-100 border rounded outline-none cursor-pointer focus:border-black/60"
                    value={tableLib.getState().pagination.pageSize}
                    onChange={e => {
                        tableLib.setPageSize(Number(e.target.value))
                        // router.replace(createURL('limit', Number(e.target.value)));
                    }}
                    >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                        {pageSize}
                        </option>
                    ))}
                    </select>
                    <span className="text-black/40">items per page</span>
                </div>
                <div className="">
                    <span>{tableLib.getState().pagination.pageSize} </span> 
                    {/* <span>total of {totalDocs} item(s)</span> */}
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 md:flex-row">
                <span className="">
                    <span>
                    {tableLib.getState().pagination.pageIndex + 1} of{' '}
                    {tableLib.getPageCount()}
                    </span>
                    <span> pages</span>
                </span>
                <span className="flex items-center gap-1">
                    Go to page:
                    <input
                    type="number"
                    defaultValue={tableLib.getState().pagination.pageIndex + 1}
                    onChange={e => {
                        const page = Number(e.target.value) || 0
                        tableLib.setPageIndex(page)
                        // router.replace(createURL('page', page));

                    }}
                    className="w-10 text-black p-0.5 border rounded outline-none focus:border-black/60"
                    />
                </span>
                <div className="flex items-center gap-1">
                    <button
                    className="disabled:cursor-not-allowed text-black/60 disabled:text-black/10"
                    onClick={() => tableLib.previousPage()}
                    // onClick={() => {
                    //     router.replace(createURL('page', page-1));
                    // }}
                    disabled={!tableLib.getCanPreviousPage()}
                    >
                        <MdChevronLeft className="text-xl" />
                    </button>
                    <button
                    className="disabled:cursor-not-allowed text-black/60 disabled:text-black/10"
                    // onClick={() => {
                    //     router.replace(createURL('page', page+1));
                    // }}
                    onClick={() => tableLib.nextPage()}
                    disabled={!tableLib.getCanNextPage()}
                    >
                        <MdChevronRight className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    )
} 