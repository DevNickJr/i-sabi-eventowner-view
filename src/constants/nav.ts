'use client'
import { INav } from '@/interfaces';
import { BiSolidCollection } from 'react-icons/bi';
import { TbTransactionEuro } from 'react-icons/tb';

const dashboardNavs: INav[] =  [
    {
        id: 10,
        title: "",
        navItems: [
            {
                id: 1,
                title: "Events",
                link: "/dashboard",
                Icon: BiSolidCollection,
                root: true,
            },
            {
                id: 2,
                title: "Transactions",
                link: "/dashboard/transactions",
                Icon: TbTransactionEuro,
                // root: true,
            },
            {
                id: 3,
                title: "Withdraw",
                link: "/dashboard/withdraw",
                Icon: BiSolidCollection,
                // root: true,
            },
        ]
    },
]

export {
    dashboardNavs
}
    