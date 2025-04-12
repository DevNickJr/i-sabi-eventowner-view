"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useMutate from '@/hooks/useMutate'
import { ILoginSuccessData, IReducerAction, IUserLogin } from '@/interfaces'
import { apiLogin } from '@/services/AuthService'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useReducer } from 'react'
import { toast } from 'react-toastify'
import Logo from "@/assets/logo.png"
import useAuthStore from '@/hooks/useAuth'
// import { useAuthContext } from '@/hooks/useAuthContext'

const initialState: IUserLogin = {
  username: '',
  password: ''
}


const Home = () => {
  const router = useRouter()
  const update = useAuthStore((state) => state.update)
  const [user, dispatch] = useReducer((state: IUserLogin, action: IReducerAction<keyof IUserLogin>) => {
    if (action.type === "reset") {
      return initialState
    }
    return { ...state, [action.type]: action.payload }
  }, initialState)

  
  const loginMutation = useMutate<IUserLogin, ILoginSuccessData>(
    apiLogin,
    {
      onSuccess: (data: ILoginSuccessData) => {
        update(data)
        toast.success("Logged in Successfully")
        return router.push('/dashboard')
      },
      showErrorMessage: true,
    }
  )

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    loginMutation.mutate(user)
  }

  return (
    <>
      {loginMutation?.isPending && <Loader />}
      <div className='grid min-h-screen p-4 place-items-center lg:h-screen'>
        <form onSubmit={handleLogin} className='flex flex-col items-center justify-center w-full max-w-lg gap-5'>
          <div className='flex flex-col items-center justify-center gap-4 text-center'>
            <Image src={Logo} alt={""} className='w-32' />
            <h3 className='font-bold text-[#111827] text-2xl mb-4'>Login to your account</h3>
          </div>
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="username">Email address</Label>
            <Input value={user?.username} onChange={(e) => dispatch({ type: "username", payload: e.target.value})}  id='username' type='text' placeholder='' />
          </div>
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input value={user?.password} onChange={(e) => dispatch({ type: "password", payload: e.target.value})} id='password' type='password' placeholder='' />
          </div>
          <Button type='submit' className='w-full p-4 mt-6 md:p-6'>Log in</Button>
          {/* <Link href={'/forgot-password'} className='text-sm text-purple-600'>Forgotten your password?</Link> */}
        </form>
      </div>
    </>
  )
}

export default Home
