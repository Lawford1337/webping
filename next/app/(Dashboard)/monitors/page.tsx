'use client'
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

type ActiveMenu = 'All Status' | 'Status UP' | 'Status Down'

export default function Monitors() {
    const [Active, setActive] = useState<ActiveMenu>('All Status')
    return (
        <div className="flex flex-col ml-7 mr-7 mt-4 gap-10">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="text-[25px] ">Monitors</h1>
                    <p className="text-[16px] ">Manage all your monitors</p>
                </div>
                <Button variant='secondary' size={'lg'} className="pl-5 pr-5 pt-5 pb-5 bg-[#54c167] hover:bg-[#54c167] hover:shadow-sm hover:shadow-green-500">+ Add Monitor</Button>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-3 border-2 border-[#0e1625] p-3 rounded-lg w-[350px]">
                    <Search />
                    <input className="w-full outline-none" type="text" placeholder="Search monitors"/>
                </div>
                <div className="flex">
                    <DropdownMenu>
                        <DropdownMenuTrigger render={<button className="border-2 border-[#0e1625] p-3 rounded-lg bg-[#080e1e] flex justify-between gap-10"><h1>{Active}</h1> <ChevronDown /> </button>} />
                        <DropdownMenuContent className='bg-[#080e1e]' align="end">   
                            <DropdownMenuItem onClick={() => setActive('Status Down')} >Status Down</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setActive('Status UP')}>Status UP</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setActive('All Status')}>
                              All Status
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}