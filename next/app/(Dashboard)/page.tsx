'use client'
import { Button } from "@/components/ui/button"
import { Activity, LucideIcon, Monitor, CircleCheck, ChartNoAxesColumn, } from "lucide-react"

interface StatsCartInter {
    header: string
    title: string
    icon: LucideIcon
    additionally: string
    Bgicon: string
    color: string
}

const statscart: StatsCartInter[] = [
    {header: 'Total Monitors', title: '0', icon: Monitor, additionally: '', Bgicon: 'bg-[#09231f]', color: '#42a35e'},
    {header: 'All system', title: 'Operational', icon: CircleCheck, additionally: '0% uptime', Bgicon: 'bg-[#09231f]', color: '#42a35e'},
    {header: 'Response True', title: '0ms', icon: Activity, additionally: 'Average', Bgicon: 'bg-[#15142e]', color: '#ac6ae9'},
    {header: 'Uptime (24h)', title: '0%', icon: ChartNoAxesColumn, additionally: 'All goods', Bgicon: 'bg-[#0d1838]', color: '#4b82f1'}
]


export default function Home() {
    return (
        <div className="flex flex-col ml-7 mr-7 mt-4 gap-10">
            {/* header dashboard */}
            <div className="flex justify-between content-center">
                {/* title dashboard */}
                <div className="flex flex-col">
                    <h1 className="text-[25px]">Dashboard</h1>
                    <p className="text-[13px]">Overview of your monitors</p>
                </div>
                {/* button "+ add monitor" */}
                <Button variant='secondary' size={'lg'} className="pl-5 pr-5 pt-5 pb-5 bg-[#54c167] hover:bg-[#54c167] hover:shadow-sm hover:shadow-green-500">+ Add Monitor</Button>
            </div>
            <div className="flex justify-between">
                {/* stats cart */}
                {statscart.map(({header, title, icon: Icon, additionally, Bgicon, color}) => (
                    <div key={header} className="flex justify-between content-center bg-[#080e1e] p-7 border-2 border-[#0e1625] rounded-lg w-93 h-40">
                        <div className="flex flex-col justify-between">
                            <p className="text-[18px]">{header}</p>
                            <h1 className="text-[22px]">{title}</h1>
                            <p className="text-[15px]">{additionally}</p>
                        </div>
                        <Icon color={color} size={65} className={`${Bgicon} p-3 rounded-lg`}/>
                    </div>
                ))}
            </div>
            <div className="flex flex-col border-2 border-[#0e1625] rounded-lg p-5 bg-[#080e1e]">
                <h1>Monitors</h1>
                
                <div className="flex">
                    {/* stats */}
                    
                </div>
            </div>
        </div>
    )
}