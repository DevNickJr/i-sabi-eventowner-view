"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import NoResult from '@/components/NoResult'
import { apiGetTxns } from '@/services/AuthService'
import { ITransactionResponse } from '@/interfaces'
import { useParams } from 'next/navigation'

const Event = () => {
  const params = useParams<{ id: string }>()
  const { data: txns, isLoading } = useFetch<ITransactionResponse>({
      api: apiGetTxns,
      key: ["TXN"],
      param: { id: params.id }
  })

  return (
    <>
        <h1 className='text-lg mb-5'>Transactions</h1>
      {
        !!txns?.transactionCount ? 
        <>
        <div className='grid lg:grid-cols-3 gap-6'>
          {
            txns?.transList?.map((txn, index) => {
              return (
                // txns card with Itxn interface
              <div key={index} className='flex items-center gap-3 shadow-sm border p-3 rounded-md'>
                  <div className="flex flex-col gap-2 text-xs">
                    <span className="text-[#626F86] text-sm font-light">
                      {txn.amount}
                    </span>
                    <span className="text-[#626F86] text-sm font-light">
                      {txn.description}
                    </span>
                    <span className={`text-[#626F86]`}>
                      type: {txn.type}
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
        </>
      : <>
          <NoResult
              isLoading={isLoading}
              desc='No transactions found' 
          />
        </>
        }
    </>
  )
}

export default Event