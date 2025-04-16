'use client'
import { INav } from '@/interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TbLogout2 } from 'react-icons/tb'
import Image from 'next/image'
import Logo from "@/assets/logo.png"
import LogoutModal from '@/components/LogoutModal'
import { ROUTES } from '@/constants/routes'

interface IProps {
    isOpen: boolean, 
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    nav: INav[];
}

const Links = ({ isOpen, setIsOpen, nav }: IProps) => {
    const [logoutModalIsOpen, setLogoutModalOpen] = useState(false)
    const [collapse, ] = useState(false)
    const pathname = usePathname();
    
    useEffect(() => {
        setIsOpen(false)
    }, [pathname, setIsOpen])


    return (
        <>
            <LogoutModal
                logout={() => ''}
                isOpen={logoutModalIsOpen} 
                setIsOpen={setLogoutModalOpen} 
            />
            <div className={`md:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white text-black px-4 py-2 md:px-10 z-30 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300 rounded-tl-xl`}>
                <div className='h-full pt-16 mb-8 overflow-hidden'>
                    <div className={`flex flex-col items-center gap-6 mb-10 pb-6 border-b`}>
                        <Link href={ROUTES.OWNER.INDEX}>
                            <Image src={Logo} alt={""} className='w-28' />
                        </Link>
                    </div>
                    <div className='h-full overflow-scroll text-sm pb-52 font-inter'>
                    {
                                nav?.map((navSection, index) => (
                                    <div key={navSection.id} className={`${collapse ? "" : index===nav.length-1 ? "" : "border-b mb-6 pb-5"} px-4`}>
                                        {
                                            navSection.title &&
                                                <h4 className={`${collapse ? "invisible" : ""} mb-5 text-xs uppercase`}>{navSection.title}</h4>
                                        }
                                        <div className='flex flex-col gap-3'>
                                            {
                                                navSection.navItems?.map((navItem) => (
                                                    <Link key={navItem.id} href={navItem.link} className={`flex items-center gap-3 cursor-pointer rounded-md px-4 py-2.5 whitespace-nowrap ${collapse ? "justify-center" : ""} ${(pathname.includes(navItem.link) && navItem.link !== "/dashboard") ? "bg-primary text-white font-semibold" : (pathname==="/dashboard" && navItem.link==="/dashboard") ? "bg-primary text-white font-semibold" : ""}`}>
                                                        <div>
                                                            <navItem.Icon className={"text-lg"} />
                                                        </div>
                                                        <span className={`${collapse && "hidden"}`}>{navItem.title}</span>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                                
                            }
                            <button  onClick={() => setLogoutModalOpen(true)} className={`flex items-center gap-3 cursor-pointer font-medium rounded-md px-4 py-2.5 whitespace-nowrap text-[#F10A0A] mt-3 ml-4`}>
                                <TbLogout2 className={"text-lg"} />
                                <span className={`${collapse && "hidden"}`}>Logout</span>
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links