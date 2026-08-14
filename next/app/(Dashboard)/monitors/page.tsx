'use client'
import { Button } from "@/components/ui/button";

export default function Monitors() {
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
                
            </div>
        </div>
    )
}