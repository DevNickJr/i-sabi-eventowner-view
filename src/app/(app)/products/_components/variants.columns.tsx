"use client";
import ColumnHead from "@/components/ColumnHead";
import { ROUTES } from "@/constants/routes";
import { IProductVariant } from "@/interfaces";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const variantsColumnnHelper = createColumnHelper<IProductVariant>();

export const variantsColumnnsMaker = () =>  [
    variantsColumnnHelper.accessor(row => row, {
        id: "name",
        header: ({ column }) => <ColumnHead title="Name" column={column} />,
        sortingFn: "text",
        cell: (info) => {
            const rowData = info.getValue()
            // return <Link className="flex items-center justify-center gap-1 p-1 px-2 text-sm text-center border rounded-full w-fit" href={`${ROUTES.VENDOR.PRODUCT.INDEX}/${rowData.product}/variants/${rowData._id}`}>
            return <Link className="flex items-center justify-center gap-1 p-1 px-2 text-sm text-center border rounded-full w-fit" href={`#`}>
                <span className="whitespace-nowrap">{rowData?.name}</span>
                {/* <MdArrowForward /> */}
            </Link>
        },
    }),
    variantsColumnnHelper.accessor("sku", {
        header: ({ column }) => <ColumnHead title="SKU" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    variantsColumnnHelper.accessor("price", {
        header: ({ column }) => <ColumnHead title="Price" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    variantsColumnnHelper.accessor("stock", {
        header: ({ column }) => <ColumnHead title="Stock" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    variantsColumnnHelper.accessor("itemDeliveryCost", {
        header: ({ column }) => <ColumnHead title="Delivery Cost" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
] as ColumnDef<IProductVariant>[];
