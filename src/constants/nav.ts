'use client'
import { INav } from '@/interfaces';
import { BiSolidCollection } from 'react-icons/bi';


const dashboardNavs: INav[] =  [
    {
        id: 1,
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
    