'use client'
import React, { Suspense } from 'react'
import { dashboardNavs } from '@/constants/nav'
import InlineLoader from '@/components/Loader/Inline'
import SideNav from './_components/SideNav'
import VendorHeader from './_components/Header'
// import { useAuthContext } from '@/hooks/useAuthContext'

const Layout = ({ children }: { children: React.ReactNode }) => { 
  // const router = useRouter()
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   if (!mounted) return setMounted(true)
  //   if (!context.isLoggedIn || context.role != RolesEnum.vendor) {
  //     router.push('/')
  //   }
  // }, [context.isLoggedIn, context.role, router, mounted])
  
  // if (!context.isLoggedIn || context.role != RolesEnum.vendor) {
  //   return  (
  //     <div className='flex items-center justify-center w-screen h-screen'>
  //       <Loader className="animate-pulse" />
  //     </div>
  //   )
  // }

  return (
    <Suspense fallback={<InlineLoader />}>
      <div className={`flex w-full h-screen overflow-hidden font-poppins bg-white`}> 
        <SideNav nav={dashboardNavs} />
        <div className="relative flex-1 overflow-y-auto rounded-md">
          <VendorHeader nav={dashboardNavs} />
          <div className='px-4 pt-4 md:px-8 md:py-8'>
            {children}
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default Layout