'use client'

import Sidebar from "@/components/feature/sidebar";

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