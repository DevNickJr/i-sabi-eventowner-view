"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import { IPaginatedResponse, IProduct } from '@/interfaces'
import HouseImg from "@/assets/globe.svg"
import NoResult from '@/components/NoResult'
import DataTable from '@/components/Table/data-table'
import { usePagination } from '@/hooks/usePagination'
import { useSorting } from '@/hooks/useSorting'
import { productsColumnnsMaker } from './columns'
import { useAuthContext } from '@/hooks/useAuthContext'
import { apiGetVendorProducts } from '@/services/VendorService'


const ProductsTab = () => {
  const { warehouse } = useAuthContext()
  
  const { limit, onPaginationChange, page, pagination } = usePagination();
  const { sorting, onSortingChange, field, order } = useSorting();
  
  const { data: products, isLoading } = useFetch<IPaginatedResponse<IProduct[]>>({
      api: apiGetVendorProducts,
      param: {
          pagination: { page, limit },
          sort: { field, order },
          warehouse
      },
      key: ["Products", page, limit, warehouse],
      requireAuth: true
  })

  const columns = productsColumnnsMaker()

  return (
    <div className=''>
        {
        (products?.totalCount && products?.totalCount > 0) ?
            <DataTable
                title="Product"
                columns={columns} 
                data={products?.data ?? []} 
                onPaginationChange={onPaginationChange}
                pageCount={Number(products?.totalPages || 0)}
                totalDocs={Number(products?.totalCount)}
                pagination={pagination}
                onSortingChange={onSortingChange}
                sorting={sorting}
            />
                :
                <NoResult
                  isLoading={isLoading}
                  image={HouseImg}
                  desc='No Product Added' 
                />
        }
    </div>
  )
}

export default ProductsTab