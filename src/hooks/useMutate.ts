'use client'
import {useMutation} from "@tanstack/react-query";
import {toast} from 'react-toastify';
import {AxiosResponse} from "axios";
import useAuthStore from "./useAuth";

interface State<K,> {
    onSuccess?: (data: K, variables?: unknown, context?: unknown) => void;
    onError?: (error: unknown, variables?: unknown, context?: unknown) => void;
    showSuccessMessage?: boolean;
    showErrorMessage?: boolean;
    requireAuth?: boolean;
    id?: string;
    params?: unknown
}

const useMutate = <T, K>(
    api: (data: T, { id, token, params, ...rest }: {
        id: string,
        token: string,
        params?: unknown,
        rest?: unknown
    }) => Promise<AxiosResponse>,
    {
        onSuccess,
        onError,
        showSuccessMessage = false,
        showErrorMessage = true,
        id,
        params,
        ...rest
    }: State<K>,
) => {
    const token = useAuthStore((state) => state.token)

    return useMutation<K, K, T>({
        mutationFn: async (data: T) => {

            const response = await api(data, {id: id || '', token, params});
            return response?.data;
        },
        onSuccess: (data, variables, context) => {
            // console.log("successful", data)
            if (showSuccessMessage) {
                toast.success((data as { message: string })?.message || "Successful!");
            }
            if (onSuccess) {
                // console.log("onSuccess", onSuccess)
                onSuccess(data, variables, context)
            }
        },
        onError: (error: any, variables, context) => {

            console.log("error2", showErrorMessage, error)
            if (showErrorMessage) {
                if (typeof error?.response?.data?.message === "string") {
                    toast.error(error?.response?.data?.message || "An Error Occurred!");
                } else {
                    toast.error(error?.response?.data?.message[0] || "An Error Occurred!");
                }
            } else {
                // toast.error("An Error Occurred!");
            }
            if (onError) {
                onError(error, variables, context)
            }
        },
        ...rest
    })
}

export default useMutate