'use client'
import { Activity } from "lucide-react"

export default function Login() {
    return (
        <div className="flex flex-1 bg-[#03070e] p-10">
            {/* form register */}
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex gap-2 pt-3 pb-16 font-bold text-[20px]">
                        <Activity color="#42a35e" />
                        <h1 className="">Uptime Monitor</h1>
                    </div>
                </div>
                {/* left title */}
                <div className="flex pt-5 pl-10 flex-col">
                    <div className="flex justify-start mb-5">
                        <div className="flex justify-center border-1 border-[#039234] shadow-[0_0_5px] bg-[#050b10] shadow-green-900 rounded-xl pt-1 pb-1 pl-2 pr-4 ">
                            <h2 className="tracking-widest text-[#01b134] text-xs">WELCOME BACK</h2>
                        </div>
                    </div>
                    <div className="flex flex-col leading-none mb-5">
                        <h1 className="text-[50px] font-bold" >Log in to your</h1>
                        <h1 className="text-[50px] font-bold text-[#03c34e] pb-6" >account</h1>
                        <p className="font-normal text-[20px] leading-tight">Access oyur dashboard and continue <br /> monitoring your services in real-time.</p>
                    </div>
                    <div className="h-[2px] w-64 bg-gradient-to-r from-green-400 to-transparent drop-shadow-[0_0_6px_rgba(16,185,129,0.9)]"></div>
                </div>
            </div>            
        </div>
    )
}