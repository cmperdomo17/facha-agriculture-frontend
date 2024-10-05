import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Water () {
    return (
        <main className="flex flex-col gap-6">
            <h1 className="text-4xl font-black">
                CALIDAD DEL AGUA
            </h1>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, libero eum. Vel amet, perspiciatis deserunt esse nulla suscipit nesciunt asperiores quae! Ullam nisi natus corporis, nulla eius porro quam deleniti?
                Distinctio possimus libero, pariatur nisi quae ratione quod, sed minima voluptas, iste iure voluptatibus nam! Earum totam velit nobis, deserunt eligendi corporis expedita architecto voluptates officia commodi, sapiente, quo facere.
            </p>
            <Link href={"/"}>
                <Button>Regresar</Button>
            </Link>
        </main>
    )
}