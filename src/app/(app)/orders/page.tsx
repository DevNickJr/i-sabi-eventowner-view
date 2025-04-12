"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import { IPaginatedResponse, IOrder } from '@/interfaces'
import HouseImg from "@/assets/globe.svg"
import NoResult from '@/components/NoResult'
import DataTable from '@/components/Table/data-table'
import { useSorting } from '@/hooks/useSorting'
import { ordersColumnnsMaker } from './_components/columns'
import { apiGetOrders } from '@/services/OrderService'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'
import { Button } from '@/components/ui/button'
import { MdAdd } from 'react-icons/md'
import { useUrlPagination } from '@/hooks/useUrlPaginate'
import { useAuthContext } from '@/hooks/useAuthContext'
import { apiGetVendorOrders } from '@/services/VendorService'

export const dynamic = "force-dynamic";

const Orders = () => {
  const { email } = useAuthContext()
  const { limit, page, pagination } = useUrlPagination();
  const { sorting, onSortingChange, field, order } = useSorting();

  const { data: orders, isLoading } = useFetch<IPaginatedResponse<IOrder[]>>({
      api: apiGetVendorOrders,
      param: {
          pagination: { page, limit },
          sort: { field, order },
      },
      key: ["VendorOrders", page, limit, email],
      requireAuth: true
  })

  const columns = ordersColumnnsMaker()

  return (
    <div className=''>
        <div className="flex flex-wrap justify-between gap-2 mb-5 md:flex-row md:items-center">
            <h2 className='text-3xl font-bold text-black/80'>Orders</h2>
            {/* <Link href={ROUTES.ADMIN.ORDER.CREATE}>
                <Button className='flex items-center gap-2 p-2 px-4 text-xs text-white md:px-4 w-fit rounded-xl bg-primary'>
                    <MdAdd className="text-lg text-white" />
                    <span>Create Order</span>
                </Button>        
            </Link> */}
        </div>
        {
        (orders?.totalCount && orders?.totalCount > 0) ?
            <DataTable
                title="Order"
                columns={columns} 
                data={orders?.data ?? []} 
                // onPaginationChange={onPaginationChange}
                pageCount={Number(orders?.totalPages || 0)}
                totalDocs={Number(orders?.totalCount)}
                pagination={pagination}
                onSortingChange={onSortingChange}
                sorting={sorting}
            />
                :
                <NoResult
                  isLoading={isLoading}
                  image={HouseImg}
                  desc='No Order Added' 
                  buttonText='Add Order'
                  onClick={() => ''}
                />
        }
    </div>
  )
}

export default Orders