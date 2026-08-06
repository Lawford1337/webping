'use client'
import Link from "next/link"
import {Activity, ChartNoAxesCombined, House, Timer, Settings, LucideIcon, User, Send} from 'lucide-react'
import { usePathname } from "next/navigation"

interface NavLink {
    href: string
    name: string
    icon: LucideIcon
}

const Nav: NavLink[] = [
    {href: '/', name: 'Dashboard', icon: House},
    {href: '/monitors', name: 'Monitors', icon: Timer},
    {href: '/status', name: 'Status Pages', icon: ChartNoAxesCombined},
    {href: '/settings', name: 'Settings', icon: Settings}
]

export default function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className="flex flex-col gap-2 pr-5 pl-5 pt-5 bg-[#080e1e] h-screen border-2 border-[#131b2c]">
            <Link href={'/'} className="flex gap-2 pt-3 pb-16 font-bold text-[20px]">
                    <Activity color="#33d17a" />
                    <h1 className="">Uptime Monitor</h1>
            </Link>
            <div className="flex flex-col justify-between flex-1 pb-10">
                <nav>
                    {Nav.map(({href, name, icon: Icon}) => {
                        const isActive = pathname === href
                        return(
                            <Link href={href} key={href} className={`link-sidebar ${isActive ? 'bg-back-active rounded-sm' : ''}`}>
                                <Icon color={`${isActive ? '#54bd65' : '#ffffff'}`} />
                                <h2>{name}</h2>
                            </Link>
                        ) 
                    })}
                </nav>
                <div className="flex flex-col">
                    {/* telegram bot div */}
                    <div className="flex gap-3 border-2 border-[#0e1625] rounded-lg p-5">
                        <Send />
                        {/* telegrab text */}
                        <div className="flex flex-col">
                            <h3 className="text-[17px] ">Telegram Bot</h3>
                            <p className="text-[#aeb3b9] text-[12px]">Get alerts directly <br />in Telegram</p>
                            <button className="bg-[#54c167] text-[#061b14] p-3 pl-10 pr-10 mt-3 rounded-lg border-0">Connect Bot</button>
                        </div>
                    </div>
                    {/* profile */}
                    <div className="flex justify-center pl-1 pt-3 pb-3 pr-7 border-2 border-[#0e1625] rounded-lg mt-10">
                        <div className="p-3">
                            <User color="#ffffff" />
                        </div>
                        <div className="flex flex-col ml-3">
                            <h3>John Doe</h3>
                            <p>test@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </aside>
    )
}