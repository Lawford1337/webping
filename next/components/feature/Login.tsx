'use client'
import { Activity, LucideIcon, Zap, Shield, ChartNoAxesColumn } from "lucide-react"
import Link from "next/link"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface IconsAuthForm {
    title: string
    bottomtitle: string
    icon: LucideIcon
    iconwidth: number
}

const IconAuth: IconsAuthForm[] = [
    {title: 'Real-time Alerts', bottomtitle: 'Get notified instantly when something goes wrong.', icon: Zap, iconwidth:2,},
    {title: 'Secure & Reliable', bottomtitle: 'Enterprise-grade security to keep your date safe.', icon: Shield, iconwidth: 2},
    {title: 'Powerful Insights', bottomtitle: 'Track performance and uptime with detailed analytics.', icon: ChartNoAxesColumn, iconwidth: 3}
]

export default function Login() {
    return (
        <div className="flex flex-col flex-1 bg-[#03080d] p-10">
            {/* header */}
            <div className="flex justify-between">
                <div className="flex gap-2 pt-3 pb-16 font-bold text-[20px]">
                    <Activity color="#42a35e" />
                    <h1 className="">Uptime Monitor</h1>
                </div>
                <div className="flex gap-3">
                    <p className="text-lg font-normal">Don't have an account?</p>
                    <Link href={'/register'} className="font-normal text-lg text-auth-green">Sign up</Link>
                </div>
            </div>
            {/* form register */}
            <div className="flex pl-10 pr-10">
                <div className="flex-1 flex-col">
                    <div className="flex pt-5 flex-col">
                        {/* left title */}
                        <div className="flex justify-start mb-5">
                            <div className="flex justify-center border-1 border-[#039234] shadow-[0_0_5px] bg-[#050b10] shadow-green-900 rounded-xl pt-1 pb-1 pl-2 pr-4 ">
                                <h2 className="tracking-widest text-auth-green text-xs">WELCOME BACK</h2>
                            </div>
                        </div>
                        <div className="flex flex-col leading-none mb-5">
                            <h1 className="text-[50px] font-bold" >Log in to your</h1>
                            <h1 className="text-[50px] font-bold text-auth-green pb-6" >account</h1>
                            <p className="font-normal text-[20px] leading-tight">Access oyur dashboard and continue <br /> monitoring your services in real-time.</p>
                        </div>
                        <div className="mb-10 h-[2px] w-64 bg-gradient-to-r from-green-400 to-transparent drop-shadow-[0_0_6px_rgba(16,185,129,0.9)]"></div>
                        {/* info */}
                        <div className="flex flex-col gap-3 justify-between">
                            {IconAuth.map(({title, bottomtitle, icon: Icon, iconwidth}) => (
                                <div key={title} className="flex gap-3 items-center">
                                    <div className="flex justify-center items-center border-1 border-auth-green shadow-[0_0_4px_#039234] rounded-full p-4 bg-[#040b10]"><Icon strokeWidth={iconwidth} color="#03c34e" /></div>
                                    <div className="flex gap-3 flex-col leading-none justify-center">
                                        <h2>{title}</h2>
                                        <p className="ml-2 font-normal text-sm w-60">{bottomtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* auth */}
                <div className="flex">
                    <div className="flex flex-col p-10 border-1 bg-[#070d13] border-colborder">
                        {/* title */}
                        <div className="flex flex-col text-start gap-3">
                            <h1 className="text-2xl">Welcome back!</h1>
                            <p className="text-sm font-normal">Log in to your account to continue</p>
                        </div>
                        {/* email & pass */}
                        <div className="flex flex-col gap-3">
                            <Field>
                                <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
                                <Input
                                  id="input-field-username"
                                  type="text"
                                  placeholder="Enter your username"
                                />
                            </Field>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}