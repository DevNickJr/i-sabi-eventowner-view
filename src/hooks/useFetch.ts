"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import {keepPreviousData, QueryKey, useQuery} from '@tanstack/react-query'
import {AxiosResponse} from 'axios'
import useAuthStore from './useAuth'

interface IProps<T> {
    api: (a?: any, b?: any) => Promise<AxiosResponse<T, any>>
    param?: any
    key: QueryKey
    onSuccess?: (a: any) => void
    requireAuth?: boolean
    select?: (a: { data: T }) => T,
    enabled?: boolean
}

const useFetch = <T,>({api, param, key, select, enabled, ...rest}: IProps<T>) => {
    const token = useAuthStore((state) => state.token)

    const {data, error, isLoading, isFetching, refetch, fetchStatus, isPlaceholderData } = useQuery({
        queryKey: [...key],
        enabled: typeof enabled === 'undefined' ? true : enabled,
        queryFn: () => api(token, param),
        select: select || ((d: { data: T }): T => d?.data),
        placeholderData: keepPreviousData,
        ...rest
    })

    return {data, error, isLoading, isFetching, refetch, fetchStatus, isPlaceholderData}
}

export default useFetch