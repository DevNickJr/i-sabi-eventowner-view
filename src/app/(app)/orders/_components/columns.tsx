"use client";
import ColumnHead from "@/components/ColumnHead";
import Actions from "@/components/Table/table-actions";
import { IOrder } from "@/interfaces";
import { formatDate } from "@/lib/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const ordersColumnnHelper = createColumnHelper<IOrder>();

export const ordersColumnnsMaker = () =>  [
    ordersColumnnHelper.accessor("orderCode", {
        header: ({ column }) => <ColumnHead title="Code" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    ordersColumnnHelper.accessor("customer", {
        header: ({ column }) => <ColumnHead title="Customer" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue() ? info.getValue()?.name : 'Guest' }</span>,
    }),
    ordersColumnnHelper.accessor("channel", {
        header: ({ column }) => <ColumnHead title="Channel" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    ordersColumnnHelper.accessor("status", {
        header: ({ column }) => <ColumnHead title="Status" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    ordersColumnnHelper.accessor("total", {
        header: ({ column }) => <ColumnHead title="Total" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    ordersColumnnHelper.accessor("deliveryCost", {
        header: ({ column }) => <ColumnHead title="Delivery Cost" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    ordersColumnnHelper.accessor("createdAt", {
        header: ({ column }) => <ColumnHead title="Placed At" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{formatDate(info.getValue()?.toString() ?? '')}</span>,
    }),
    ordersColumnnHelper.accessor("updatedAt", {
        header: ({ column }) => <ColumnHead title="Updated At" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{formatDate(info.getValue()?.toString() ?? '')}</span>,
    }),
] as ColumnDef<IOrder>[];
