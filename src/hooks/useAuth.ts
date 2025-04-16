import { persist, createJSONStorage } from 'zustand/middleware'
import { ILoginSuccessData } from '@/interfaces'
import { create } from 'zustand'

type State = ILoginSuccessData

type Action = {
  update: (state: State) => void
  reset: () => void
}

const init = {
  _id: '',
  balance: 0,
  email: '',
  username: '',
  phone: '',
}

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: '',
      doc: init,
      update: (val: State) => set(() => (val)),
      reset: () => set(() => ({ doc: init, token: '' })),
    }),
    {
      name: 'auth', 
      storage: createJSONStorage(() => localStorage), 
    },
  ),
)

export default useAuthStore
