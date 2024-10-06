"use client";

import Image from "next/image"
import { ModeToggle } from "@/components/ui/darkmode/modeToggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LeftSidebar() {
    const pathname = usePathname();
    const baseClass = "px-2 py-1 rounded-lg hover:bg-neutral-700/30";
    const activeClass = "bg-neutral-700 hover:bg-neutral-700 text-white";

    return (

        <section className="p-2 flex flex-col gap-6">
            <div className="flex gap-4 justify-center items-center">
                <Image
                    src="/nasa-logo.svg"
                    alt="Nasa Logo"
                    width={100}
                    height={100}
                />
                <ModeToggle />
            </div>

            <div className="flex flex-col gap-4 pt-2 px-2 pb-80 rounded-sm">
                <Link href={'/'} className={`${baseClass} ${pathname === '/' ? activeClass : ''}`}>
                    <button className="dark:text-white">Home</button>
                </Link>
                <Link href={'/water'} className={`${baseClass} ${pathname === '/water' ? activeClass : ''}`}>
                    <button className="dark:text-white">Agua</button>
                </Link>
                <Link href={'/heatMap'} className={`${baseClass} ${pathname === '/heatMap' ? activeClass : ''}`}>
                    <button className="dark:text-white">Mapa de calor</button>
                </Link>
                <Link href={'/map'} className={`${baseClass} ${pathname === '/map' ? activeClass : ''}`}>
                    <button className="dark:text-white">Mapa</button>
                </Link>
            </div>
        </section>
    )
}