import Image from "next/image"
import { ModeToggle } from "@/components/ui/darkmode/modeToggle"

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
                    <li>
                        Mapa
                    </li>
                    <li>
                        Agua lluvia
                    </li>
                    <li>
                        Agua de río
                    </li>
                    <li>
                        Agua subterránea
                    </li>
                </ul>
            </div>
        </section>
    )
}