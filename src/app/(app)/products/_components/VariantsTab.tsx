"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import { IPaginatedResponse, IProductVariant } from '@/interfaces'
import HouseImg from "@/assets/globe.svg"
import NoResult from '@/components/NoResult'
import DataTable from '@/components/Table/data-table'
import { usePagination } from '@/hooks/usePagination'
import { useSorting } from '@/hooks/useSorting'
import { variantsColumnnsMaker } from './variants.columns'
import { apiGetVendorProductVariants } from '@/services/VendorService'

const VariantsTab = () => {
  
  const { limit, onPaginationChange, page, pagination } = usePagination();
  const { sorting, onSortingChange, field, order } = useSorting();
  
  const { data: products, isLoading } = useFetch<IPaginatedResponse<IProductVariant[]>>({
      api: apiGetVendorProductVariants,
      param: {
          pagination: { page, limit },
          sort: { field, order },
      },
      key: ["ProductVariants", page, limit],
      requireAuth: true
  })

  const columns = variantsColumnnsMaker()

  return (
    <>
        {
        (products?.totalCount && products?.totalCount > 0) ?
            <DataTable
                title="ProductVariant"
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
                  desc='No Product Variants' 
                />
        }
    </>
  )
}

export default VariantsTab