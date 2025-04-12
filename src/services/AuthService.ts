import { IUserLogin } from "@/interfaces"
import BaseService, { NoAuthService } from "./BaseService"

const Auth = (token: string) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const apiLogin =  (data: IUserLogin) => {
    return NoAuthService.post(`login-event-owner`, data)
}

export const apiLogout =  () => {
    return NoAuthService.post(`/logout`, {})
}

export const apiGetEvents =  (token: string) => {
    return BaseService.get(`my-event-list`, Auth(token))
}

export const apiGetTxns =  (token: string, { id }: { id: string }) => {
    return BaseService.get(`get-event-transaction/${id}`, Auth(token))
}

export const apiGetContestants =  (token: string, { id }: { id: string }) => {
    return BaseService.get(`get-contestant/${id}`, Auth(token))
}
