"use client";
import ColumnHead from "@/components/ColumnHead";
import { ROUTES } from "@/constants/routes";
import { ICategory, IProduct, IVendor } from "@/interfaces";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const productsColumnnHelper = createColumnHelper<IProduct>();

export const productsColumnnsMaker = () =>  [
    // productsColumnnHelper.accessor("_id", {
    //     header: ({ column }) => <ColumnHead title="" column={column} />,
    //     sortingFn: "text",
    //     cell: () => <div>
    //         <Checkbox className="w-3.5 h-3.5" />
    //     </div>,
    // }),
    productsColumnnHelper.accessor(row => row, {
        id: 'name',
        header: ({ column }) => <ColumnHead title="Name" column={column} />,
        sortingFn: "text",
        cell: (info) => {
            const rowData = info.getValue()
            return <Link className="flex items-center justify-center gap-1 p-1 px-2 text-center border rounded-full w-fit" href={`${ROUTES.VENDOR.PRODUCT.INDEX}/${rowData._id}`}>
                <span className="whitespace-nowrap">{rowData?.name}</span>
                <MdArrowForward />
            </Link>
        },
    }),
    productsColumnnHelper.accessor("slug", {
        header: ({ column }) => <ColumnHead title="Slug" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    productsColumnnHelper.accessor("category", {
        header: ({ column }) => <ColumnHead title="Vendor" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{(info.getValue() as ICategory)?.name?.toString() ?? 'N/A'}</span>},
    ),
    // productsColumnnHelper.accessor(row => row, {
    //     id: 'actions',
    //     sortingFn: "text",
    //     cell: (info) => {
    //         const rowData = info.getValue()
    //         const id = rowData?._id;
    //         return (
    //             <Actions
    //                 viewLink={`/classes/${id}`}
    //             />
    //         );
    //     },
    //     header: ({ column }) => <ColumnHead sortable={false} title="Actions" column={column} className="flex justify-center" />,
    // }),
] as ColumnDef<IProduct>[];
