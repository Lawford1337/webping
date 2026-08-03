'use client'

import Sidebar from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function SidebarPage({children}: {children: React.ReactNode}) {
    return(
        <aside>
            <Sidebar />
            <main>
                {children}
            </main>
        </aside>
    )
}