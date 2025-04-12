"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import { IVendorDashboard } from '@/interfaces'
import NoResult from '@/components/NoResult'
import { TbSitemap } from 'react-icons/tb'
import { MdOutlineShoppingCartCheckout } from 'react-icons/md'
import Link from 'next/link'
import { ROUTES } from '@/constants/routes'
import { apiGetUser } from '@/services/AuthService'

const VendorDashboard = () => {
  const { data: dashboard, isLoading } = useFetch<IVendorDashboard>({
      api: apiGetUser,
      key: ["Dashboard"],
  })

  return (
    <>
      {
        !!dashboard ? 
        <>
          <div className='grid sm:grid-cols-2 gap-4'>
            <Link href={ROUTES.VENDOR.PRODUCT.INDEX} className='flex items-center gap-3 justify-between  shadow-sm border p-3 rounded-md'>
              <div className="flex flex-col gap-2">
                <span className="text-[#626F86] text-sm font-light">
                  Total Products
                </span>
                <span className={`text-xl font-semibold text-[#626F86]`}>
                  {dashboard.totalProducts ?? ''}
                </span>
              </div>
              <TbSitemap className='text-xl' />
            </Link>
            <Link href={ROUTES.VENDOR.ORDER.INDEX} className='flex items-center gap-3 justify-between  shadow-sm border p-3 rounded-md'>
              <div className="flex flex-col gap-2">
                <span className="text-[#626F86] text-sm font-light">
                  Total Orders
                </span>
                <span className={`text-xl font-semibold text-[#626F86]`}>
                  {dashboard.totalOrders ?? ''}
                </span>
              </div>
              <MdOutlineShoppingCartCheckout className='text-xl' />
            </Link>
          </div>
        </>
      : <>
          <NoResult
              isLoading={isLoading}
              desc='Error Loading Dashboard' 
          />
        </>
        }
    </>
  )
}

export default VendorDashboard