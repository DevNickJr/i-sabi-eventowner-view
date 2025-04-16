"use client"
import React from 'react'
import useFetch from '@/hooks/useFetch'
import NoResult from '@/components/NoResult'
import { apiGetEvents } from '@/services/AuthService'
import { IEventResponse } from '@/interfaces'
import Image from 'next/image'

const Events = () => {
  const { data: events, isLoading } = useFetch<IEventResponse>({
      api: apiGetEvents,
      key: ["EVENTS"],
  })

  return (
    <>
      {
        !!events?.myEvent ? 
        <>
        <div className='grid lg:grid-cols-3 gap-6'>
          {
            events?.myEvent?.map((event, index) => {
              return (
                // Events card with IEvent interface
                <div key={index} className='flex items-center gap-3 shadow-sm border p-3 rounded-md'>
                {/* <Link href={`/dashboard/${event._id}`} key={index} className='flex items-center gap-3 shadow-sm border p-3 rounded-md'> */}
                  <Image
                    src={event.image_url}
                    width={100}
                    height={100}
                    alt={event.eventName}
                    className="rounded-md h-32 w-1/2 object-cover bg-black/10"
                  />
                  <div className="flex flex-col gap-2 text-xs">
                    <span className="text-[#626F86] text-sm font-light">
                      {event.eventName}
                    </span>
                    {/* <span className={`text-[#626F86]`}>
                      {event.active ? 'Active' : 'Inactive'}
                    </span> */}
                    <span className={`text-[#626F86]`}>
                      type: {event.type}
                    </span>
                    <span className={`text-[#626F86]`}>
                      {event.type === 'TICKETING' ? 'sold' : 'votes'}: {event.totalCount}
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
            desc='No events found' 
          />
        </>
        }
    </>
  )
}

export default Events