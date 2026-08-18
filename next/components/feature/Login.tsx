'use client'
import { Activity } from "lucide-react"

export default function Login() {
    return (
        <div className="flex">            
            {/* form register */}
            <div className="flex flex-col">
                <div className="flex gap-2 pt-3 pb-16 font-bold text-[20px]">
                    <Activity color="#42a35e" />
                    <h1 className="">Uptime Monitor</h1>
                </div>
            </div>
        </div>
    )
}