'use client'

import Sidebar from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function SidebarPage({children}: {children: React.ReactNode}) {
    return(
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}