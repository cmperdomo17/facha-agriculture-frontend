import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Map () {
    return (
        <main className="flex flex-col gap-6">
            <h1 className="text-4xl font-black">
                MAPA
            </h1>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium neque corrupti ullam numquam reiciendis architecto pariatur, beatae dolore quisquam rem illum exercitationem non explicabo corporis eveniet, soluta, quos recusandae officia?
                Cum beatae quos ipsum perspiciatis aut eos rerum sint nobis quaerat impedit! Minus dolorum optio id, veniam, voluptate sapiente magnam commodi voluptatibus iure tempora voluptates accusamus error recusandae. Ut, est.
            </p>
            <Link href={"/"}>
                <Button>Regresar</Button>
            </Link>
        </main>
    )
}