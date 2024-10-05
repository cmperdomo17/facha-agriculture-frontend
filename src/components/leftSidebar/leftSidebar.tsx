import Image from "next/image"
import { ModeToggle } from "@/components/ui/darkmode/modeToggle"
import Link from "next/link"

export default function LeftSidebar() {   
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

            <div className="pt-2 px-2 pb-80 border rounded-sm border-neutral-900 dark:border-white">
                <ul>
                    <Link href={'/'}>
                        <li className="text-lg font-extrabold hover:underline text-neutral-900 dark:text-white">Home</li>
                    </Link>
                    <Link href={'/water'}>
                        <li className="text-lg font-extrabold hover:underline text-neutral-900 dark:text-white">Agua</li>
                    </Link>
                    <Link href={'/heatMap'}>
                        <li className="text-lg font-extrabold hover:underline text-neutral-900 dark:text-white">Mapa de calor</li>
                    </Link>
                    <Link href={'/map'}>
                        <li className="text-lg font-extrabold hover:underline text-neutral-900 dark:text-white">Mapa</li>
                    </Link>
                </ul>
            </div>
        </section>
    )
}