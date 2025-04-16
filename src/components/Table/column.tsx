"use client";
import ColumnHead from "@/components/ColumnHead";
import { ITransaction } from "@/interfaces";
import { formatDate } from "@/lib/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const txnColumnHelper = createColumnHelper<ITransaction>();

export const txnColumnnsMaker = () =>  [
    txnColumnHelper.accessor("amount", {
        header: ({ column }) => <ColumnHead title="Amount" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">₦ {info.getValue()?.toString()}</span>,
    }),
    txnColumnHelper.accessor("type", {
        header: ({ column }) => <ColumnHead title="Type" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    txnColumnHelper.accessor("description", {
        header: ({ column }) => <ColumnHead sortable={false} title="Description" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{info.getValue()?.toString()}</span>,
    }),
    txnColumnHelper.accessor("createdAt", {
        header: ({ column }) => <ColumnHead title="Placed At" column={column} />,
        sortingFn: "text",
        cell: (info) => <span className="whitespace-nowrap">{formatDate(info.getValue()?.toString() ?? '')}</span>,
    }),
] as ColumnDef<ITransaction>[];