import { persist, createJSONStorage } from 'zustand/middleware'
import { ILoginSuccessData } from '@/interfaces'
import { create } from 'zustand'

type State = ILoginSuccessData

type Action = {
  update: (state: State) => void
}

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      token: '',
      doc: {
          _id: '',
          balance: 0,
          email: '',
          username: '',
          phone: '',
      },
      update: (val: State) => set(() => (val)),
    }),
    {
      name: 'auth', 
      storage: createJSONStorage(() => localStorage), 
    },
  ),
)

export default useAuthStore
